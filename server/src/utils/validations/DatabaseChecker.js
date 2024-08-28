const { Op } = require('sequelize'); // Import Op from Sequelize
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');

class DatabaseChecker {
    /**
     * Checks if there are any unique fields in a model.
     * @param {Model} model - The Sequelize model to query.
     * @param {Array} fields - Array of objects { name: 'field', value: 'value' } to be checked.
     * @throws {ConflictError} - If an existing record is found.
     */
    static async checkUniqueFields(model, fields) {
        const whereClause = fields.map(field => ({
            [field.name]: field.value
        }));

        const existingRecord = await model.findOne({
            where: {
                [Op.or]: whereClause
            }
        });

        if (existingRecord) {
            const conflictingFields = fields
                .filter(field => existingRecord[field.name] === field.value)
                .map(field => field.name);

            const message = `An account with this ${conflictingFields.join(' and ')} already exists.`;
            throw new ConflictError(message.trim());
        }
    }

    /**
     * Checks if a record exists in a model.
     * @param {Model} model - The Sequelize model to query.
     * @param {number|string} id - The ID of the record to check.
     * @param {string} [errorMessage='Record not found'] - Error message to throw if the record is not found.
     * @throws {NotFoundError} - If the record is not found.
     * @returns {Model} - The found record.
     */
    static async checkExists(model, id, errorMessage = 'Record not found') {
        const record = await model.findByPk(id);
        if (!record) throw new NotFoundError(errorMessage);
        return record;
    }
}

module.exports = DatabaseChecker;

