import React from "react";

//import dotenv from "dotenv";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
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
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true,
});

// check for a local token
const data = {
  isLoggedIn: !!localStorage.getItem("token"),
};
// write the cache data on initial load
cache.writeData({ data });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  );
};

export default App;
