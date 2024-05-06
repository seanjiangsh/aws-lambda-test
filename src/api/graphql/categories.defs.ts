import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    categories: [Category!]!
    getCategoryById(id: ID!): Category
    getCategoryByTitle(title: String): Category
  }
  type Category {
    id: ID!
    title: String!
    items: [Item!]!
  }
  type Item {
    id: ID!
    name: String!
    price: Float!
    imageUrl: String!
  }
`;
