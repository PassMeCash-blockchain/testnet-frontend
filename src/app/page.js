import ServiecesSection from "@/components/templates/ServiecesSection";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <ServiecesSection />
    </main>
  );
}
