import { ValidationError } from 'apollo-server-express';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { BaseError } from '../errors/BaseError';
import { InternalServerError } from '../errors/InternalServerError';
import { InvalidInputError } from '../errors/InvalidInputError';

export const ErrorHandlerMiddleware = (error: GraphQLError): GraphQLFormattedError => {
    if(error.message === 'Argument Validation Error') {
        return handleAsValidationError(error);
    }

    if(error.originalError instanceof BaseError) return error.originalError;

    return new InternalServerError;
}

const handleAsValidationError = (error: ValidationError): GraphQLFormattedError => {
    const message = Object.values(error.extensions.exception.validationErrors[0].constraints)[0];
    return new InvalidInputError(message as string);
};