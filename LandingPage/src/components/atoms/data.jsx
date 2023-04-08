export async function getStaticProps() {
    const client = new ApolloClient({
       uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg5fdn18061201t38p7oe6lc/master',
       cache: new InMemoryCache(),
    });
    const headerData = await client.query({
    query: gql`
      query MyQuery {
  headerSection(where: {id: "clg6omvqs0lw30blj3t5l3qhj"}) {
    header
  }
}
    `,
   });
   const allHeaderData = headerData.data.header;
    return {
       props: {
         allHeaderData,
       },
    };
   }

   
 