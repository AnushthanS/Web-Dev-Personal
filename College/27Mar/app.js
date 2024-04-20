import express from 'express';
import { ApolloServer } from '@apollo/server';
import connectToDatabase from './config/database.js';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const PORT = 3000;

const startServer = async () => {
    await connectToDatabase();
    const app = express();
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });

    server.applyMiddleware({ app });

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer();