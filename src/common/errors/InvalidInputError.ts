import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class InvalidInputError extends BaseError {
    id = Constants.ERROR.INVALID_INPUT;
    message = '';

    constructor(message: string) {
        super();
        this.message = message;
    }
}