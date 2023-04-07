<<<<<<< HEAD
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>This is the home page.</h1>
=======
import Image from 'next/image'
import { Archivo } from 'next/font/google'
import styles from './page.module.css'

const Archivo = Archivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     
>>>>>>> 1a6299ccd0d2d34b4fd848fdda2e84b1b4a9a90c
    </main>
  );
}
