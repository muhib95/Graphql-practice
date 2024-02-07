export const typeDefs = `#graphql
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
