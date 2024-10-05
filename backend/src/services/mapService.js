import fetch from 'node-fetch';
import MapRequest from '../models/requests/MapRequest.js';
import { nasaEndpointsConfig } from '../config/config.js'
import { validateNasaConfig } from '../utils/configUtils.js'
import { getRegionById } from './filterService.js';
import InvalidConfigurationError from '../exceptions/InvalidConfigurationError.js';
import ExternalServiceError from '../exceptions/ExternalServiceError.js';
import { isArray, isValidGeoJsonFeature } from '../utils/formatUtils.js';
import InvalidGeoJsonObject from '../exceptions/InvalidGeoJsonObject.js';

const containsFeatureWithId = (featureList, id) => {
    if (!isArray(featureList)) {
        throw new InvalidGeoJsonObject();
    }
    return featureList.find(feature => feature.properties && feature.properties.id === id);
}
const addEventLineFeature = (eventsLineFeatures, feature) => {
    if (!isValidGeoJsonFeature(feature)
        || !isArray(eventsLineFeatures)) {
        throw new InvalidGeoJsonObject();
    }
    if (feature.geometry.type === 'Point') {
        eventsLineFeatures.push({
            type: "Feature",
            properties: feature.properties,
            geometry: {
                type: "LineString",
                coordinates: [feature.geometry.coordinates]
            }
        })
    }
}
const updateEventLineFeature = (eventsLineFeature, feature) => {
    if (!isValidGeoJsonFeature(feature) || !isValidGeoJsonFeature(eventsLineFeature)) {
        throw new InvalidGeoJsonObject();
    }
    eventsLineFeature.geometry.coordinates.push(feature.geometry.coordinates);
}


export const fetchEventsGoeData = async (request) => {


    if (!validateNasaConfig(nasaEndpointsConfig, "eventsGoeData")) {
        throw new InvalidConfigurationError("External Service configuration is missing or invalid.");
    }

    // prepare request
    const mapRequest = new MapRequest(request);
    console.log({ mapRequest })
    const region = getRegionById(mapRequest.regionId)
    const bbox = ((mapRequest.regionId === 'all') || !region) ? '' : `&bbox=${region.coordinates}`;
    const url = `${nasaEndpointsConfig.Endpoints.eventsGoeData}`
        + `?start=${mapRequest.startDate}`
        + `&end=${mapRequest.endDate}`
        + `&source=${mapRequest.sourcesList}`
        + `&category=${mapRequest.categoriesList}`
        + `&status=${mapRequest.status}`
        + `${bbox}`
        + `&api_key=${nasaEndpointsConfig.ApiKey}`;

    // send request
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // verify the response
    if (!response.ok) {
        throw new ExternalServiceError("External service error occured when trying to fetch events geo data", response.status);
    }

    const data = await response.json();
    if (!data.features) {
        throw new ExternalServiceError("External service returned wrong format when trying to fetch events geo data");
    }

    // create lines for events that has multiple goe-position 
    if (data.features.length !== 0) {
        const groupedFeatures = data.features.reduce((eventsLineFeatures, feature) => {
            if (typeof eventsLineFeatures === 'object' && Object.keys(eventsLineFeatures).length === 0) {
                eventsLineFeatures = [];
            }
            const id = feature.properties.id;
            const eventsLineFeature = containsFeatureWithId(eventsLineFeatures, id);
            if (!eventsLineFeature) {
                addEventLineFeature(eventsLineFeatures, feature);
            }
            else
                updateEventLineFeature(eventsLineFeature, feature);
            return eventsLineFeatures;
        }, {})
            .filter(eventsLineFeature => isValidGeoJsonFeature(eventsLineFeature) && eventsLineFeature.geometry.coordinates.length > 1);
        data.features.push(...groupedFeatures);
    }
    return data;

}