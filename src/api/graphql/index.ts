import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./categories.defs";
import { resolvers } from "./categories.resolvers";
import { Categories } from "./categories.data";

// Apply Apollo middleware to Express
const rootValue = Categories;
const server = new ApolloServer({ rootValue, typeDefs, resolvers });
export default server;
