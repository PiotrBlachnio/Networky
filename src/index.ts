import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from './modules/auth/register/Register';
import { ErrorHandlerMiddleware } from './common/middlewares/ErrorHandlerMiddleware';
import { Config } from './common/config';
import { config } from 'dotenv';

config();

const start = async () => {
    const schema = await buildSchema({ resolvers: [RegisterResolver] });

    const apolloServer = new ApolloServer({ schema, formatError: ErrorHandlerMiddleware });

    const app = express();

    apolloServer.applyMiddleware({ app });

    app.listen(Config.APP.PORT, () => console.log(`Server is running on port ${Config.APP.PORT}`));
}

start();