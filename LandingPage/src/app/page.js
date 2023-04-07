import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";
import Services from "@/components/organisms/Services";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <Services />
      {/* <SectionSpacing className={`flex justify-around items-center`}>
          <WhatWeDo/>
       </SectionSpacing> */}
    </main>
  );
}
