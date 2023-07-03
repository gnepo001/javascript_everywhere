//export { default as Query } from "./query";
//export { default as Mutation } from "./mutation";

import Query from "./query.js";
import Mutation from "./mutation.js";

const resolvers = {
  Query,
  Mutation,
};

export default resolvers;
