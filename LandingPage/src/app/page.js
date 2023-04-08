import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";
import Services from "@/components/organisms/Services";

const archivo = Archivo({ subsets: ["latin"] });
import TextSlider from "@/components/organisms/TextSlider";
import Swap from "@/components/organisms/Swap";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";

export default function Home() {
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
