import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class DuplicateEmailError extends BaseError {
    id = Constants.ERROR.DUPLICATE_EMAIL;
    message = 'Provided email already exists';
}