import { db } from "../../db";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const p = db.products.find((sp) => sp.id === args.productId);
            return p;
        },
    },
};
