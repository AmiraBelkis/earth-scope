import { statusList } from "../config/config.js";
import RequestNotValidError from "../exceptions/RequestNotValidError.js";

const regex = /^[A-Za-z_]+$/;

const formatDate = (date) => {
    try {
        const d = new Date(date);
        const isoString = d.toISOString();
        return isoString.split('T')[0];
    } catch (error) {
        throw new RequestNotValidError(`Error, invalid date.`);
    }

}

const isAlphabeticList = (list) => {
    return Array.isArray(list) && list.every(item => regex.test(item));
}

const isAlphabetic = (str) => {
    return regex.test(str);
}

const isStatusValid = (status) => {
    return statusList.includes(status);
}

export const convertListToString = (list) => {
    return list.join(',');
}

export const isMapRequestValid = ({ regionId, categoriesList, sourcesList, status, startDate, endDate }) => {
    if (!regionId || !isAlphabetic(regionId))
        throw new RequestNotValidError(`Error, invalid or missing regionId field.`);

    if (!categoriesList || !isAlphabeticList(categoriesList))
        throw new RequestNotValidError(`Error, invalid or missing categories field.`);

    if (!sourcesList || !isAlphabeticList(sourcesList))
        throw new RequestNotValidError(`Error, invalid or missing sources field.`);

    if (!status || !isStatusValid(status))
        throw new RequestNotValidError(`Error, invalid or missing status.`);

    return [formatDate(startDate), formatDate(endDate)];
}

export const isValidGeoJsonFeature = (feature) => {
    return feature && feature.properties && feature.geometry && feature.geometry.coordinates
}

export const isArray = (arr) => {
    return arr && Array.isArray(arr)
}