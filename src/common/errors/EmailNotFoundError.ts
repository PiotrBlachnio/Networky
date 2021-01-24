import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class EmailNotFoundError extends BaseError {
    id = Constants.ERROR.EMAIL_NOT_FOUND;
    message = 'Provided email does not exist';
}