import fetch from 'node-fetch';

import { regionsConfig, nasaEndpointsConfig } from '../config/config.js';
import { validateRegoinsConfig, validateNasaConfig } from '../utils/configUtils.js';

import Source from '../models/Source.js';
import Category from '../models/Category.js';

import NotFoundError from '../exceptions/NotFoundError.js'
import ExternalServiceError from '../exceptions/ExternalServiceError.js'
import InvalidConfigurationError from '../exceptions/InvalidConfigurationError.js';

export const fetchRegions = () => {
    if (!validateRegoinsConfig(regionsConfig)) {
        throw new InvalidConfigurationError("Regions configuration is missing or invalid.");
    }
    return regionsConfig.Regions;
}

export const getRegionById = (id) => {
    const region = fetchRegions().find(region => region.id === id);
    if (!region)
        throw new NotFoundError(`No region with the code "${id}" was found`);
    return region
}

export const fetchCategories = async () => {
    if (!validateNasaConfig(nasaEndpointsConfig, "categories")) {
        throw new InvalidConfigurationError("External Service configuration is missing or invalid.");

    }

    const url = `${nasaEndpointsConfig.Endpoints.categories}?api_key=${nasaEndpointsConfig.ApiKey}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new ExternalServiceError("External service error occured when trying to fetch categories", response.status);
    }

    const data = await response.json();

    if (!data.categories) {
        throw new ExternalServiceError("External service returned wrong format when trying to fetch categories");
    }
    const categories = data.categories.map(category => new Category(category.id, category.title));
    return categories;
}


export const fetchSources = async () => {

    if (!validateNasaConfig(nasaEndpointsConfig, "sources")) {
        throw new InvalidConfigurationError("External Service configuration is missing or invalid.");
    }

    const url = `${nasaEndpointsConfig.Endpoints.sources}?api_key=${nasaEndpointsConfig.ApiKey}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new ExternalServiceError("External service error occured when trying to fetch sources", response.status);
    }

    const data = await response.json();
    if (!data.sources) {
        throw new ExternalServiceError("External service returned wrong format when trying to fetch sources");
    }
    const sources = data.sources.map(source => new Source(source.id, source.title));
    return sources;
}