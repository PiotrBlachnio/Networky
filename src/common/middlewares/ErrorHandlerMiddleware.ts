import { ValidationError } from 'apollo-server-express';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { InvalidInputError } from '../errors/InvalidInputError';

export const ErrorHandlerMiddleware = (error: GraphQLError): GraphQLFormattedError => {
    if(error.message === 'Argument Validation Error') {
        return handleAsValidationError(error);
    }

    return error.originalError;
}

const handleAsValidationError = (error: ValidationError): GraphQLFormattedError => {
    const message = Object.values(error.extensions.exception.validationErrors[0].constraints)[0];
    return new InvalidInputError(message as string);
};