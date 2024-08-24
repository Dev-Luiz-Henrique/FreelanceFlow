function handleHttpError(res, error) {
    const errorResponse = {
        name: error.name || "Server Error",
        message: error.message || "An unexpected error occurred.",
        details:
            process.env.NODE_ENV === "development" ? error.stack : undefined,
    };

    if(process.env.NODE_ENV === 'development') 
        console.error(error);
    res.status(error.statusCode || 500).json(errorResponse);
}

module.exports = handleHttpError;
