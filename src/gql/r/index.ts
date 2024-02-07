import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: String }, context: any) => {
      const p = db.products.find((sp) => sp.id === args.productId);
      return p;
    },
    categories: () => db.categories,
    category: (parent: any, args: { cId: String }, context: any) => {
      const r = db.categories.find((c) => c.id === args.cId);
      return r;
    },
  },
};
