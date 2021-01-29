import { Constants } from '../constants';
import { BaseError } from './BaseError';

export class PostNotFoundError extends BaseError {
    id = Constants.ERROR.POST_NOT_FOUND;
    message = 'Post does not exist';
}