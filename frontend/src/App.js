import React from "react";

//import dotenv from "dotenv";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Pages from "./pages/index.js";

//dotenv.config();

//configure our api url and cache
const uri = "http://localhost:40000/api";
const cache = new InMemoryCache();

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
