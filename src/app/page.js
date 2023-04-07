import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <h1 className="text-red-500">This is the home page.</h1>
    </main>
  );
}
