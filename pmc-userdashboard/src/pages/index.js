<<<<<<< HEAD
import Image from "next/image";
import { Archivo } from "next/font/google";
import ButtonRequest from "@/components/molecules/ButtonRequest";
import Sidebar from "@/components/organisms/Sidebar";
import { Cards } from "@/components/molecules/Cards";
import { TransactionList } from "@/components/molecules/TransactionList";

const archivo = Archivo({ subsets: ["latin"] });
=======
import Image from 'next/image'
import { Archivo } from 'next/font/google'
import ButtonRequest from '@/components/molecules/ButtonRequest'
import Sidebar from '@/components/organisms/Sidebar'

const archivo = Archivo({ subsets: ['latin'] })
>>>>>>> origin/main

export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      <TransactionList type="occupied" />
    </main>
  );
=======
      <ButtonRequest />
      <Sidebar/>
    </main>
  )
>>>>>>> origin/main
}
