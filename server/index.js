import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";

import db from "./db.js";
import models from "./models/index.js";
import typeDefs from "./schema.js";
//import { resolvers } from "./resolvers/";
import resolvers from "./resolvers/index.js";

dotenv.config();
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

const app = express();

db.connect(DB_HOST);

//apollo server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    //add db models to the context
    return { models };
  },
});

await server.start();
server.applyMiddleware({ app, path: "/api" });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
