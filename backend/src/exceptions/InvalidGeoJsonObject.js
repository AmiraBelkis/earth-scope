import ApiError from "./ApiError.js";

class InvalidGeoJsonObject extends ApiError {
    constructor(message = 'Invalid GeoJSON object', status = 500) {
        super(message, status);
    }
}

export default InvalidGeoJsonObject;