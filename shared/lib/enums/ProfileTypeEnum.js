export default class ProfileTypeEnum {
    static types = Object.freeze({
        ADMINISTRATOR: {
            id: 1,
            name: "Administrador",
            value: "administrator"
        },
        CLIENT: {
            id: 2,
            name: "Cliente",
            value: "client"
        },
        FREELANCER: {
            id: 3,
            name: "Freelancer",
            value: "freelancer"
        }
    });

    /**
     * Retrieves a list of all Profile Types.
     * 
     * @returns {Array<Object>} An array containing all Profile Type objects.
     *                          Each object includes the Profile Type's id, name, and value.
     */
    static getAllProfileTypes() {
        return Object.values(ProfileTypeEnum.types);
    }

    /**
     * Retrieves a specific Profile Type by its ID.
     *
     * @param {number} id - The ID of the Profile Type to be retrieved.
     * @returns {Object} The Profile Type object corresponding to the given ID.
     *                   The object includes the Profile Type's id, name, and value.
     * @throws {Error} Throws an error if no Profile Type is found with the specified ID.
     * @throws {Error} Throws an error if the ID parameter is invalid, i.e., not a positive number.
     */
    static getProfileTypeById(id) {
        if (isNaN(id) || id <= 0)
            throw new Error("Invalid ID parameter, expected a positive number.");

        const type = Object.values(ProfileTypeEnum.types).find(type => type.id === id);
        if (!type) 
            throw new Error(`Profile Type ID '${id}' was not found.`);

        return type;
    }

    /**
     * Retrieves a specific Profile Type by its value.
     *
     * @param {string} value - The value of the Profile Type to be retrieved.
     * @returns {Object} The Profile Type object corresponding to the given value.
     *                   The object includes the Profile Type's id, name, and value.
     * @throws {Error} Throws an error if no Profile Type is found with the specified value.
     * @throws {Error} Throws an error if the value parameter is invalid, i.e., not a string.
     */
    static getProfileTypeByValue(value) {
        if (typeof value !== 'string') 
            throw new Error("Invalid value parameter, expected a string.");

        const type = Object.values(ProfileTypeEnum.types).find(type => type.value === value);
        if (!type) 
            throw new Error(`Profile Type value '${value}' was not found.`);

        return type;
    }
}