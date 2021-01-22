import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Query, Resolver } from 'type-graphql';
import { createConnection } from 'typeorm';

@Resolver()
class HelloResolver {

    @Query(() => String)
    async hello() {
        return 'Hello world'
    }
}

const start = async () => {
    await createConnection();
    
    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });

    const apolloServer = new ApolloServer({ schema });

    const app = express();

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('Server is running on port 4000'));
}

start();