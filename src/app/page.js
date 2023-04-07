import WhatWeDo from "@/components/organisms/WhatWeDo";
import SectionSpacing from "@/components/templates/SectionSpacing";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
import TextSlider from "@/components/molecules/TextSlider";
import Swap from "@/components/molecules/Swap";

export default function Home() {
  return (
    <main className={archivo.className}>
      <h1>This is the home page.</h1>
      <TextSlider />
      <Swap />
    </main>
  );
}
