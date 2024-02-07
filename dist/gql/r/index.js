import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const p = db.products.find((sp) => sp.id === args.productId);
            return p;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const r = db.categories.find((c) => c.id === args.cId);
            return r;
        },
    },
    Product: {
        category: (parent, args, context) => {
            const r = db.categories.find((c) => c.id === parent.categoryId);
            return r;
        },
    },
};
