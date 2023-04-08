export async function getStaticProps() {
    const client = new ApolloClient({
       uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clg5fdn18061201t38p7oe6lc/master',
       cache: new InMemoryCache(),
    });
    const headerData = await client.query({
    query: gql`
      query MyQuery {
  headerSection(where: {id: "clg7sui9o10mg0alep6las9b5"}) {
    buttons
    headerLogo {
      url
    }
    nav
  }
}
    `,
   });
   const heroData = await client.query({
      query: gql`
      query MyQuery {
  heroSection(where: {id: "clg6q344f0lzu0bk6msy5muc8"}) {
    buttons
    heroTextB
    heroTextMedium
    heroTextSmall
    heroImage {
      url
    }
  }
}
      `,
   });
   const partnerData = await client.query({
      query: gql`
      query MyQuery {
  partner(where: {id: "clg6qdoco0mhk0bljxxz9c82j"}) {
    partner
  }
}
      `,
   });
   const whatWeDoData = await client.query({
      query: gql`
      query MyQuery {
  whatWeDoSection(where: {id: "clg7scrao0zyc0bk6wr1ybxk8"}) {
    wwdTitleBig
    wwdTitle
    wwdImage {
      url
    }
    wwdDescription
    wwdBtn
  }
}
      `,
   });
   const calculatorData = await client.query({
      query: gql`
      query MyQuery {
  calculatorSection(where: {id: "clg7trcgs10ju0bk69hykwjmk"}) {
    calculatorBtn
    calculatorTextBig
    calculatorTextSmall
    calculatorTextfield
    calculatorTokens
    calculatorImage {
      url
    }
  }
}
      `,
   });
   const allHeaderData = headerData.data.headerSection;
   const allHeroData = heroData.data.heroSection;
   const allPartnerData = partnerData.data.partner;
   const allWhatWeDoData = whatWeDoData.data.whatWeDoSection;
   const allCalculatorData = calculatorSection.data.calculatorSection;
    return {
       props: {
         allHeaderData,
         allHeroData,
         allPartnerData,
         allWhatWeDoData,
         allCalculatorData
       },
    };
   }

   
 