export default class StatesEnum {
    static states = Object.freeze({
        ACRE: { id: 1, name: "Acre", code: "AC" },

        ALAGOAS: { id: 2, name: "Alagoas", code: "AL" },

        AMAZONAS: { id: 3, name: "Amazonas", code: "AM" },

        AMAPA: { id: 4, name: "Amapá", code: "AP" },

        BAHIA: { id: 5, name: "Bahia", code: "BA" },

        CEARA: { id: 6, name: "Ceará", code: "CE" },

        DISTRITO_FEDERAL: { id: 7, name: "Distrito Federal", code: "DF" },

        ESPIRITO_SANTO: { id: 8, name: "Espírito Santo", code: "ES" },

        GOIAS: { id: 9, name: "Goiás", code: "GO" },

        MARANHAO: { id: 10, name: "Maranhão", code: "MA" },

        MATO_GROSSO: { id: 11, name: "Mato Grosso", code: "MT" },

        MATO_GROSSO_DO_SUL: { id: 12, name: "Mato Grosso do Sul", code: "MS" },

        MINAS_GERAIS: { id: 13, name: "Minas Gerais", code: "MG" },

        PARA: { id: 14, name: "Pará", code: "PA" },

        PARAIBA: { id: 15, name: "Paraíba", code: "PB" },

        PARANA: { id: 16, name: "Paraná", code: "PR" },

        PERNAMBUCO: { id: 17, name: "Pernambuco", code: "PE" },

        PIAUI: { id: 18, name: "Piauí", code: "PI" },

        RIO_DE_JANEIRO: { id: 19, name: "Rio de Janeiro", code: "RJ" },

        RIO_GRANDE_DO_NORTE: { id: 20, name: "Rio Grande do Norte", code: "RN" },

        RIO_GRANDE_DO_SUL: { id: 21, name: "Rio Grande do Sul", code: "RS" },

        RONDONIA: { id: 22, name: "Rondônia", code: "RO" },

        RORAIMA: { id: 23, name: "Roraima", code: "RR" },

        SANTA_CATARINA: { id: 24, name: "Santa Catarina", code: "SC" },

        SAO_PAULO: { id: 25, name: "São Paulo", code: "SP" },

        SERGIPE: { id: 26, name: "Sergipe", code: "SE" },

        TOCANTINS: { id: 27, name: "Tocantins", code: "TO" },
    });

    /**
     * Retrieves a list of all States.
     * 
     * @returns {Array<Object>} An array containing all State objects.
     *                          Each object includes the State's id, name, and code.
     */
    static getAllStates = () => {
        return Object.values(StatesEnum.states);
    };

    /**
     * Retrieves a specific State by its ID.
     *
     * @param {number} id - The ID of the State to be retrieved.
     * @returns {Object} The State object corresponding to the given ID.
     *                   The object includes the State's id, name, and code.
     * @throws {Error} Throws an error if no State is found with the specified ID.
     * @throws {Error} Throws an error if the ID parameter is invalid, i.e., not a positive number.
     */
    static getStateById = (id) => {
        if (isNaN(id) || id <= 0)
            throw new Error("Invalid ID parameter, type a positive number.");

        const state = Object.values(StatesEnum.states).find(state => state.id === id);
        if (!state) {
            throw new Error(`State ID '${id}' was not found.`);
        }

        return state;
    };

    /**
     * Retrieves a specific State by its code.
     *
     * @param {string} code - The code of the State to be retrieved (e.g., 'AC' for 'Acre').
     * @returns {Object} The State object corresponding to the given code.
     *                   The object includes the State's id, name, and code.
     * @throws {Error} Throws an error if no State is found with the specified code.
     * @throws {Error} Throws an error if the code parameter is invalid, i.e., not a string.
     */
    static getStateByCode = (code) => {
        if (typeof code !== 'string')
            throw new Error("Invalid value parameter, expected a string.");

        const state = Object.values(StatesEnum.states).find(state => state.code === code.toUpperCase());
        if (!state)
            throw new Error(`State code '${code}' was not found.`);

        return state;
    };
}