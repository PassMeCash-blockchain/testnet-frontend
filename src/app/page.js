import WhatWeDo from "@/components/organisms/WhatWeDo";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
        <WhatWeDo/>
    </main>
  );
}
