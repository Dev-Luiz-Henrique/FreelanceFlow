class NoContentError extends Error {
    constructor(message) {
        super(message);
        this.name = "NoContentError";
        this.statusCode = 204; // HTTP status code indicating "No Content"
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = NoContentError;