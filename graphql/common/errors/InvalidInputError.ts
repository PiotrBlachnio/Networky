import { ValidationError } from 'apollo-server-azure-functions';
import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class InvalidInputError extends BaseError {
    id = Constants.ERROR.INVALID_INPUT;
    message = '';

    constructor(error: ValidationError) {
        super();

        const message = Object.values(error.extensions.exception.validationErrors[0].constraints)[0];
        this.message = message as string;
    }
}