function handleHttpError(res, error, statusCode = 500) {
    const errorResponse = {
        statusCode,
        error: "Server Error",
    };

    if (process.env.NODE_ENV === "development")
        errorResponse.details = error.message;
    res.status(statusCode).json(errorResponse);
}

module.exports = handleHttpError;
