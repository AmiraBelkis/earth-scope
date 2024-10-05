import ApiError from "./ApiError.js";

class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

export default NotFoundError;