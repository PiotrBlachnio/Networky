import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class InternalServerError extends BaseError {
    id = Constants.ERROR.INTERNAL_SERVER_ERROR;
    message = 'Internal Server error';
}