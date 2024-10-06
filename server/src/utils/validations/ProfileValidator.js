import Joi from 'joi';
import ValidationError from '../errors/ValidationError.js';
import { StatesEnum } from 'freelanceflow-shared/enums';

const stateIds = StatesEnum.getAllStates().map(state => state.id);

class ProfileValidator {
    constructor() {
        this.schema = Joi.object({
            id: Joi.number().integer().min(1).max(2147483647).messages({
                'number.base': 'ID must be a number',
                'number.integer': 'ID must be an integer',
                'number.min': 'ID must be at least 1',
                'number.max': 'ID must be at most 2147483647',
            }),
            username: Joi.string().alphanum().min(3).max(30).messages({
                'string.base': 'Username must be a string',
                'string.alphanum': 'Username must contain only letters and numbers',
                'string.min': 'Username must be at least 3 characters long',
                'string.max': 'Username must be at most 30 characters long',
            }),
            name: Joi.string().min(3).max(50).messages({
                'string.base': 'Name must be a string',
                'string.min': 'Name must be at least 3 characters long',
                'string.max': 'Name must be at most 50 characters long',
            }),
            email: Joi.string().email().min(6).max(255).messages({
                'string.base': 'Email must be a string',
                'string.email': 'Invalid email format',
                'string.min': 'Email must be at least 6 characters long',
                'string.max': 'Email must be at most 255 characters long',
            }),
            password: Joi.string().min(8).max(255)
                .pattern(/(?=.*[a-z])/)      // must contain at least one lowercase letter
                .pattern(/(?=.*[A-Z])/)      // must contain at least one uppercase letter
                .pattern(/(?=.*\d)/)         // must contain at least one digit
                .pattern(/(?=.*[!@#$%^&*])/) // must contain at least one special character
                .messages({
                    'string.base': 'Password must be a string',
                    'string.min': 'Password must be at least 8 characters long',
                    'string.max': 'Password must be at most 20 characters long',
                    'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
                }
            ),
            phone: Joi.string().pattern(/^\d{11}$/).messages({
                'string.base': 'Phone must be a string',
                'string.pattern.base': 'Invalid phone format',
            }),
            state: Joi.number().integer().valid(...stateIds).messages({
              'number.base': 'State ID must be a number',
              'number.integer': 'State ID must be an integer',
              'any.only': 'State ID must in the range of 1-' + stateIds.length,
            }),                                        
            birthDate: Joi.date().less('now').greater('1-1-1940').messages({
                'date.base': 'Birth date must be a valid date',
                'date.less': 'Invalid birth date',
                'date.greater': 'Birth date must be a valid date',
            }),
            bio: Joi.string().min(10).max(300).messages({
                'string.base': 'Bio must be a string',
                'string.min': 'Bio must be at least 10 characters long',
                'string.max': 'Bio must be at most 300 characters long',
            }),
            profile_picture: Joi.string().min(5).max(255).pattern(/\.(jpeg|jpg|png)$/).messages({
                'string.base': 'Profile picture must be a string',
                'string.min': 'Profile picture must be at least 5 characters long',
                'string.max': 'Profile picture must be at most 255 characters long',
                'string.pattern.base': 'Invalid profile picture format',
            }),
            linkedin: Joi.string().min(5).max(255)
                .pattern(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/)
                .messages({
                    'string.base': 'LinkedIn profile must be a string',
                    'string.min': 'LinkedIn profile must be at least 5 characters long',
                    'string.max': 'LinkedIn profile must be at most 255 characters long',
                    'string.pattern.base': 'Invalid LinkedIn profile format',
                }
            ),
            created_at: Joi.date().messages({
                'date.base': 'Created at must be a valid date',
            })
        });
    }

    async validate(data) {
        const { error } = this.schema.validate(data);
        if (error) 
            throw new ValidationError(error.details[0].message);
    }
}

export default new ProfileValidator();