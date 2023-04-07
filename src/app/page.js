import { Archivo } from "next/font/google";

const Archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is the home page.</h1>
    </main>
  );
}
