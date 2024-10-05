import ApiError from "./ApiError.js";

class ExternalServiceError extends ApiError {
    constructor(message = 'External Service is down', status = 500) {
        super(message, status);
    }
}

export default ExternalServiceError;