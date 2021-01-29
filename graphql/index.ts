import 'reflect-metadata';
import queryComplexity, { fieldExtensionsEstimator, simpleEstimator } from 'graphql-query-complexity';
import { ApolloServer } from 'apollo-server-azure-functions';
import { buildSchema } from 'type-graphql'
import { config } from 'dotenv';;
import { ErrorHandlerMiddleware } from './common/middlewares/ErrorHandlerMiddleware';
import { Config } from './common/config';
import { resolvers } from './modules';
import { ConfigValidator } from './common/utils/ConfigValidator';
import { container } from './common/utils/DIContainer';
import { AuthMiddleware } from './common/middlewares/AuthMiddleware';
import { Constants } from './common/constants';
import { Context } from '@azure/functions';

config();

let server: ApolloServer;

const httpTrigger = async function(context: Context) {
    await ConfigValidator.validate(Config);
    
    if(server === undefined) {
        const schema = await buildSchema({ resolvers, container, authChecker: AuthMiddleware({
            tokenService: container.get(Constants.DEPENDENCY.TOKEN_SERVICE),
            userRepository: container.get(Constants.DEPENDENCY.USER_REPOSITORY)
        })});
    
        server = new ApolloServer({ schema: schema, formatError: ErrorHandlerMiddleware, context: ({ context }) => {
            return {
                azureContext: context
            }
        }, validationRules: [
            queryComplexity({
                maximumComplexity: 24,
                estimators: [
                    fieldExtensionsEstimator(),
                    simpleEstimator({ defaultComplexity: 1 })
                ]
            })
        ]});
    }

    const apolloHandler = server.createHandler();

    return new Promise((resolve, reject) => {
        const originalDone = context.done

        context.done = (error, result) => {
            originalDone(error, result)

            if(error) reject(error)

            resolve(result)
        }

        apolloHandler(context, context.req!)
    });
}


export default httpTrigger;