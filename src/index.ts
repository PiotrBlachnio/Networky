import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from './modules/auth/register/Register';
import { ErrorHandlerMiddleware } from './common/middlewares/ErrorHandlerMiddleware';

const start = async () => {
    const schema = await buildSchema({ resolvers: [RegisterResolver] });
    
    const apolloServer = new ApolloServer({ schema, formatError: ErrorHandlerMiddleware });

    const app = express();

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('Server is running on port 4000'));
}

start();