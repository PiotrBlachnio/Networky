import { BaseError } from './BaseError';

export class InvalidInputError extends BaseError {
    id = 0;
    message = '';

    constructor(message: string) {
        super();
        this.message = message;
    }
}