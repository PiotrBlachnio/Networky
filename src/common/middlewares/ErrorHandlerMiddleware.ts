import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { BaseError } from '../errors/BaseError';
import { InternalServerError } from '../errors/InternalServerError';
import { InvalidInputError } from '../errors/InvalidInputError';
import { Logger } from '../utils/Logger';

export const ErrorHandlerMiddleware = (error: GraphQLError): GraphQLFormattedError => {
    Logger.error(error.message);

    if(error.message === 'Argument Validation Error') return new InvalidInputError(error);

    // if(error.name === 'ValidationError') return error;

    if(error.originalError instanceof BaseError) {
        return { id: error.originalError.id, message: error.originalError.message } as GraphQLFormattedError;
    }

    return new InternalServerError();
}