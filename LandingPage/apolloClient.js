import { ApolloClient,  InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg5fdn18061201t38p7oe6lc/master',
    cache: new InMemoryCache(),
 });

 export default client;