import { db } from "../../db";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: String }, context: any) => {
      const p = db.products.find((sp) => sp.id === args.productId);
      return p;
    },
  },
};
