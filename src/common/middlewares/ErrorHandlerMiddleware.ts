import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { BaseError } from '../errors/BaseError';
import { InternalServerError } from '../errors/InternalServerError';
import { InvalidInputError } from '../errors/InvalidInputError';

export const ErrorHandlerMiddleware = (error: GraphQLError): GraphQLFormattedError => {
    if(error.message === 'Argument Validation Error') return new InvalidInputError(error);

    if(error.originalError instanceof BaseError) return error.originalError;

    return new InternalServerError();
}