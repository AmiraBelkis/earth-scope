import ApiError from "./ApiError.js";

class RequestNotValidError extends ApiError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

export default RequestNotValidError;