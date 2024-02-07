import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./db.js";
const typeDefs = `#graphql
  type Product {
    id: ID!
name: String
image:String
price:Float
quantity:Int
onStock:Boolean
category:ID
   
    
  }
 
 
  type Query {
    products: [Product]
    product(productId:ID!):Product
  }
`;
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const p = db.products.find((sp) => sp.id === args.productId);
            return p;
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
