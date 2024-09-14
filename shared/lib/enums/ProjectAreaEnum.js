export default class ProjectAreaEnum {
    static areas = Object.freeze({
        DATA_SCIENCE: {
            id: 1,
            name: "Ciência de Dados",
            value: "data-science"
        },
        ARTIFICIAL_INTELLIGENCE: {
            id: 2,
            name: "Inteligência Artificial",
            value: "artificial-intelligence"
        },
        FRONTEND_DEVELOPMENT: {
            id: 3,
            name: "Desenvolvimento Frontend",
            value: "frontend-development"
        },
        BACKEND_DEVELOPMENT: {
            id: 4,
            name: "Desenvolvimento Backend",
            value: "backend-development"
        },
        FULL_STACK_DEVELOPMENT: {
            id: 5,
            name: "Desenvolvimento Full Stack",
            value: "full-stack-development"
        },
        UX_UI_DESIGN: {
            id: 6,
            name: "Design UX/UI",
            value: "ux-ui-design"
        },
        CLOUD_COMPUTING: {
            id: 7,
            name: "Computação em Nuvem",
            value: "cloud-computing"
        },
        CYBER_SECURITY: {
            id: 8,
            name: "Segurança Cibernética",
            value: "cyber-security"
        },
        DEVOPS: {
            id: 9,
            name: "DevOps",
            value: "devops"
        },
        DATABASE_ADMINISTRATION: {
            id: 10,
            name: "Administração de Banco de Dados",
            value: "database-administration"
        },
        NETWORK_ENGINEERING: {
            id: 11,
            name: "Engenharia de Redes",
            value: "network-engineering"
        },
        MACHINE_LEARNING: {
            id: 12,
            name: "Aprendizado de Máquina",
            value: "machine-learning"
        },
        INTERNET_OF_THINGS: {
            id: 13,
            name: "Internet das Coisas",
            value: "internet-of-things"
        },
        BLOCKCHAIN: {
            id: 14,
            name: "Blockchain",
            value: "blockchain"
        },
        SOFTWARE_TESTING: {
            id: 15,
            name: "Teste de Software",
            value: "software-testing"
        }
    });

    /**
     * Retrieves an array of all Project Areas.
     * 
     * @returns {Array<Object>} An array containing all Project Area objects.
     *                          Each object includes the Project Area's id, name, and value.
     */
    static getAllProjectAreas() {
        return Object.values(ProjectAreaEnum.areas);
    };

    /**
     * Retrieves a specific Project Area by its ID.
     *
     * @param {number} id - The ID of the Project Area to be retrieved.
     * @returns {Object} The project area object corresponding to the given ID.
     *                   The object includes the area's id, name, and value.
     * @throws {Error} Throws an error if no Project Area is found with the specified ID.
     * @throws {Error} Throws an error if the ID parameter is invalid, i.e., not a positive number.
     */
    static getProjectAreaById(id) {
        if (isNaN(id) || id <= 0)
            throw new Error("Invalid ID parameter, expected a positive number.");

        const area = Object.values(ProjectAreaEnum.areas).find(area => area.id === id);
        if (!area)
            throw new Error(`Area ID '${id}' was not found.`);

        return area;
    };

    /**
     * Retrieves a specific Project Area by its value.
     *
     * @param {string} value - The value of the Project Area to be retrieved (e.g., 'internet-of-things' for 'Internet das Coisas').
     * @returns {Object} The Project Area object corresponding to the given value.
     *                   The object includes the area's id, name, and value.
     * @throws {Error} Throws an error if no Project Area is found with the specified value.
     * @throws {Error} Throws an error if the value parameter is invalid, i.e., not a string.
     */
    static getProjectAreaByValue(value) {
        if (typeof value !== 'string')
            throw new Error("Invalid value parameter, expected a string.");

        const area = Object.values(ProjectAreaEnum.areas).find(area => area.value === value);
        if (!area)
            throw new Error(`Area value '${value}' was not found.`);

        return area;
    };
}