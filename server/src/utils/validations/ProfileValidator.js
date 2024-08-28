const ValidationError = require('../errors/ValidationError');

class ProfileValidator {
    static validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) 
            throw new ValidationError('Invalid email format');
    }

    static validatePhoneFormat(phone) {
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone)) 
            throw new ValidationError('Invalid phone format');
    }

    static validatePasswordStrength(password) {
        if (!(password.length >= 8 && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password)))
            throw new ValidationError('Password does not meet security requirements');
    }

    static validateBirthDate(birthDate) {
        const date = new Date(birthDate);
        const age = new Date().getFullYear() - date.getFullYear();
        if (isNaN(date.getTime()) || age < 18) 
            throw new ValidationError('Invalid birth date or age below the required minimum');
    }
}

module.exports = ProfileValidator;
