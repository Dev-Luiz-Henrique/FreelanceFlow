class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = 400; // Código de status HTTP para recurso não encontrado
        Error.captureStackTrace(this, this.constructor); // Captura a pilha de chamadas para facilitar a depuração
    }
}

module.exports = ValidationError;
