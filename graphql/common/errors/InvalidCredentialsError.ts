import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class InvalidCredentialsError extends BaseError {
    id = Constants.ERROR.INVALID_CREDENTIALS;
    message = 'Provided credentials are invalid';
}