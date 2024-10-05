import ApiError from "./ApiError.js";

class InvalidConfigurationError extends ApiError {
    constructor(message = 'Invalid Configuration') {
        super(message, 500);
    }
}

export default InvalidConfigurationError;