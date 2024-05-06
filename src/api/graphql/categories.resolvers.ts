import { Categories } from "./categories.data";

type RootValue = typeof Categories;

export const resolvers = {
  Query: {
    categories() {
      return Categories;
    },
    getCategoryById(root: RootValue, args: { id: string }) {
      const { id } = args;
      return Categories.find((c) => c.id === id);
    },
    getCategoryByTitle(root: RootValue, args: { title: string }) {
      const { title } = args;
      return Categories.find(
        (c) => c.title.toLowerCase() === title.toLowerCase(),
      );
    },
  },
};
