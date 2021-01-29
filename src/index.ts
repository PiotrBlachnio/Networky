import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'
import { config } from 'dotenv';;
import { ErrorHandlerMiddleware } from './common/middlewares/ErrorHandlerMiddleware';
import { Config } from './common/config';
import { resolvers } from './modules';
import { ConfigValidator } from './common/utils/ConfigValidator';
import { container } from './common/utils/DIContainer';
import { AuthMiddleware } from './common/middlewares/AuthMiddleware';
import { Constants } from './common/constants';

config();

const start = async () => {
    await ConfigValidator.validate(Config);
    
    const schema = await buildSchema({ resolvers, container, authChecker: AuthMiddleware({
        tokenService: container.get(Constants.DEPENDENCY.TOKEN_SERVICE)
    })});

    const server = new ApolloServer({ schema: schema, formatError: ErrorHandlerMiddleware, context: ({ req }) => {
        return { req };
    }});

    const app = express();

    server.applyMiddleware({ app });
    app.listen(Config.APP.PORT, () => console.log(`Server is running on port ${Config.APP.PORT}`));
}

start();