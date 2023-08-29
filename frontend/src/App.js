import React from "react";

//import dotenv from "dotenv";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

import Pages from "./pages/index.js";

//dotenv.config();

//configure our api url and cache
const uri = "http://localhost:4000/api";
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

//check for token and return headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || "",
    },
  };
});

//configure apollo client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
};

export default App;
