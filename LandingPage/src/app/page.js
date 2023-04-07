import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";
import Services from "@/components/organisms/Services";

const archivo = Archivo({ subsets: ["latin"] });
import TextSlider from "@/components/organisms/TextSlider";
import Swap from "@/components/organisms/Swap";

export default function Home() {
  return (
    <main className={archivo.className}>
      <SectionSpacing className={`flex justify-around items-center`}>
        <WhatWeDo />
      </SectionSpacing>
      <TextSlider />
      <Swap />
      <Services />
    </main>
  );
}
