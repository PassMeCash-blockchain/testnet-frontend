import ServiecesSection from "@/components/templates/ServiecesSection";
import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <ServiecesSection />
      {/* <SectionSpacing className={`flex justify-around items-center`}>
          <WhatWeDo/>
       </SectionSpacing> */}
    </main>
  );
}
