import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });
import TextSlider from "@/components/molecules/TextSlider";

export default function Home() {
  return (
    <main className={archivo.className}>
      <h1>This is the home page.</h1>
      <TextSlider />
    </main>
  );
}
