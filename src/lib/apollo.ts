import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5x55gck1sd401ut687sazda/master',
  cache: new InMemoryCache()
})