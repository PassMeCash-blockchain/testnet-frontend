import { Archivo } from "next/font/google";
import CreateAccount from "./create-account";
import { useSelector } from "react-redux";
const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={archivo}>
      <CreateAccount />
    </main>
  );
}
