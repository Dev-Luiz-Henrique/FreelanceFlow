export default class ProjectStatusEnum {
    static statuses = Object.freeze({
        OPEN: {
            id: 1,
            name: "Aberto",
            value: "open"
        },
        IN_PROGRESS: {
            id: 2,
            name: "Em andamento",
            value: "in-progress"
        },
        ON_HOLD: {
            id: 3,
            name: "Em espera",
            value: "on-hold"
        },
        COMPLETE: {
            id: 4,
            name: "Completo",
            value: "complete"
        },
        CANCELLED: {
            id: 5,
            name: "Cancelado",
            value: "cancelled"
        }
    });

    /**
     * Retrieves a list of all Project Statuses.
     * 
     * @returns {Array<Object>} An array containing all Project status objects.
     *                          Each object includes the Project status's id, name, and value.
     */
    static getAllProjectStatus() {
        return Object.values(ProjectStatusEnum.statuses);
    };

    /**
     * Retrieves a specific Project Status by its ID.
     *
     * @param {number} id - The ID of the Project Status to be retrieved.
     * @returns {Object} The Project status object corresponding to the given ID.
     *                   The object includes the Project Status's id, name, and value.
     * @throws {Error} Throws an error if no Project Status is found with the specified ID.
     * @throws {Error} Throws an error if the ID parameter is invalid, i.e., not a positive number.
     */
    static getProjectStatusById(id) {
        if (isNaN(id) || id <= 0 || id > 5)
            throw new Error("Invalid ID parameter, type a number between (1-5).");

        const status = Object.values(ProjectStatusEnum.statuses).find(status => status.id === id);
        if (!status)
            throw new Error(`Project status ID '${id}' was not found.`);

        return status;
    };

    /**
     * Retrieves a specific Project Status by its value.
     *
     * @param {string} value - The value of the Project Status to be retrieved (e.g., 'open' for 'Aberto').
     * @returns {Object} The Project Status object corresponding to the given value.
     *                   The object includes the Project Status's id, name, and value.
     * @throws {Error} Throws an error if no Project Status is found with the specified value.
     * @throws {Error} Throws an error if the value parameter is invalid, i.e., not a string.
     */
    static getProjectStatusByValue(value) {
        if (typeof value !== 'string') 
            throw new Error("Invalid value parameter, expected a string.");

        const status = Object.values(ProjectStatusEnum.statuses).find(status => status.value === value);
        if (!status)
            throw new Error(`Project status value '${value}' was not found.`);

        return status;
    };
}