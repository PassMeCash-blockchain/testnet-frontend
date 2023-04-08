import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";
import Services from "@/components/organisms/Services";

import { clients } from "../components/atoms/libraries";
import { gqls } from "../components/atoms/libraries";

export async function fetchData() {
    
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
   const {allHeroData} = heroData;
   const {allPartnerData} = partnerData;
   const {allCalculatorData} = calculatorData.calculatorSection;
    return {
         allHeroData,
         allPartnerData,
         allCalculatorData
    };
   }

const archivo = Archivo({ subsets: ["latin"] });
import TextSlider from "@/components/organisms/TextSlider";
import Swap from "@/components/organisms/Swap";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";

export default async function Home() {
  const res = await fetchData()
  return (
    <main className={archivo.className}>
      <Header />
      <Hero />
      {/* <TextSlider /> */}
      {/* <Swap /> */}
      <Services />
      <WhatWeDo />
    </main>
  );
}
