import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <h1>This is the home page.</h1>
    </main>
  );
}
