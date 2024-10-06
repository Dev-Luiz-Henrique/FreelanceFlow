class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ConflictError';
        this.statusCode = 409; // Código de status HTTP para conflito
        Error.captureStackTrace(this, this.constructor); // Captura a pilha de chamadas para facilitar a depuração
    }
}

export default ConflictError;