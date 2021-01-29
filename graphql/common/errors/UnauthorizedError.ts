import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class UnauthorizedError extends BaseError {
    id = Constants.ERROR.UNAUTHORIZED;
    message = 'Unauthorized';
}