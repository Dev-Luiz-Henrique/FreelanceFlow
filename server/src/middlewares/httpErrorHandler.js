function handleHttpError(err, req, res, next) {
    const errorResponse = {
        name: err.name || "Server Error",
        message: err.message || "An unexpected error occurred.",
        details: process.env.NODE_ENV === "development" ? err.stack : undefined,
    };

    // Log the error
    if (process.env.NODE_ENV === 'development')
        console.error(err);

    // Respond with the error
    res.status(err.statusCode || 500).json(errorResponse);
}

module.exports = handleHttpError;