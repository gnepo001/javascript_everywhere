import React from "react";

// import dotenv from "dotenv";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Pages from "./pages/index.js";

//configure our api url and cache
const url = process.env.API_URL;
const cache = new InMemoryCache();

//configure apollo client
const client = new ApolloClient({
  url,
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
