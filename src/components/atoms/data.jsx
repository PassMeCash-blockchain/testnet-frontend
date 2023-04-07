export async function getStaticProps() {
    const client = new ApolloClient({
       uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg5fdn18061201t38p7oe6lc/master',
       cache: new InMemoryCache(),
    });
    return {
       props: {},
    };
   }

   const data = await client.query({
    query: gql`
       query ProductsQuery {
          products {
             id
             name
             slug
             price
             image {
                url
             }
          }
       }
    `,
   });