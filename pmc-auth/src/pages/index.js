import { Archivo } from 'next/font/google'
import { AuthSidebar } from './../components/molecules/authSidebar';
import { AuthSidebar2 } from '@/components/molecules/authSidebar2';
const archivo = Archivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={archivo}>
      {/* <AuthSidebar /> */}
      <AuthSidebar2/>
    </main>
  )
}
