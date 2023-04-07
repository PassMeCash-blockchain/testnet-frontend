import Image from 'next/image'
import { Archivo } from 'next/font/google'
import ButtonRequest from '@/components/molecules/ButtonRequest'
import Sidebar from '@/components/organisms/Sidebar'

const archivo = Archivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <ButtonRequest />
      <Sidebar/>
    </main>
  )
}