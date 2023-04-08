import { clients } from "./libraries";
import { gqls } from "./libraries";

export default async function getStaticProps() {
    const {data: headerData} = await clients.query({
    query: gqls`
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
   const {data: heroData} = await clients.query({
      query: gqls`
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
   const {data: partnerData} = await clients.query({
      query: gqls`
      query MyQuery {
  partner(where: {id: "clg6qdoco0mhk0bljxxz9c82j"}) {
    partner
  }
}
      `,
   });
   const {data: whatWeDoData} = await clients.query({
      query: gqls`
      query MyQuery {
  whatWeDoSection(where: {id: "clg7scrao0zyc0bk6wr1ybxk8"}) {
    id
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
   const {data: calculatorData} = await clients.query({
      query: gqls`
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
   const {allHeaderData} = headerData.data.headerSection;
   const {allHeroData} = heroData.data.heroSection;
   const {allPartnerData} = partnerData.data.partner;
   const allWhatWeDoData = whatWeDoData;
   const {allCalculatorData} = calculatorData.data.calculatorSection;
  //  console.log({allWhatWeDoData});
  //  console.log('dd', allHeaderData)
  console.log('aaaaa')
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

export const data = () => {
  console.log({
    allHeaderData,
    allHeroData,
    allPartnerData,
    allWhatWeDoData,
    allCalculatorData
  })
  return(
    <div>helloooooooo</div>
  )
}

   
 