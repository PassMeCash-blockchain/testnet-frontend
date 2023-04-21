import Image from "next/image";
import { Archivo } from "next/font/google";
import ButtonRequest from "@/components/molecules/ButtonRequest";
import Sidebar from "@/components/organisms/Sidebar";
import { Cards } from "@/components/molecules/Cards";
import { TransactionList } from "@/components/molecules/TransactionList";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <ButtonRequest />
      <Sidebar /> */}
      {/* <Cards type="crypto_balance" /> */}
      <TransactionList type="occupied" />
    </main>
  );
}
