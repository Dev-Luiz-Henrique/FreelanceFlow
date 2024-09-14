export default class OfferStatusEnum {
    static statuses = Object.freeze({
        OPEN: {
            id: 1,
            name: "Aberto",
            value: "open"
        },
        ACCEPTED: {
            id: 2,
            name: "Aceito",
            value: "accepted"
        },
        REJECTED: {
            id: 3,
            name: "Rejeitado",
            value: "rejected"
        }
    });

    /**
     * Retrieves a list of all Offer Statuses.
     * 
     * @returns {Array<Object>} An array containing all Offer Status objects.
     *                          Each object includes the Offer Status's id, name, and value.
     */
    static getAllOfferStatus() {
        return Object.values(OfferStatusEnum);
    };

    /**
     * Retrieves a specific Offer Status by its ID.
     *
     * @param {number} id - The ID of the Offer Status to be retrieved.
     * @returns {Object} The Offer Status object corresponding to the given ID.
     *                   The object includes the Offer Status's id, name, and value.
     * @throws {Error} Throws an error if no Offer Status is found with the specified ID.
     * @throws {Error} Throws an error if the ID parameter is invalid, i.e., not a positive number.
     */
    static getOfferStatusById(id) {
        if (isNaN(id) || id <= 0)
            throw new Error("Invalid ID parameter, expected a positive number.");

        const status = Object.values(OfferStatusEnum.statuses).find(status => status.id === id);
        if (!status) 
            throw new Error(`Status ID '${id}' was not found.`);

        return status;
    };

    /**
     * Retrieves a specific Offer Status by its value.
     *
     * @param {string} value - The value of the Offer Status to be retrieved (e.g., 'open' for 'Aberto').
     * @returns {Object} The Offer Status object corresponding to the given value.
     *                   The object includes the Offer Status's id, name, and value.
     * @throws {Error} Throws an error if no Offer Status is found with the specified value.
     * @throws {Error} Throws an error if the value parameter is invalid, i.e., not a string.
     */
    static getOfferStatusByValue(value) {
        if (typeof value !== 'string') 
            throw new Error("Invalid value parameter, expected a string.");

        const status = Object.values(OfferStatusEnum.statuses).find(status => status.value === value);
        if (!status) 
            throw new Error(`Offer status value '${value}' was not found.`);

        return status;
    };
}