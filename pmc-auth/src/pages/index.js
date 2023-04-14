import { Archivo } from 'next/font/google'
import { AuthSidebar } from './../components/molecules/authSidebar';
import { AuthSidebar2 } from '@/components/molecules/authSidebar2';
import Register from '@/components/Organisms/Register';
import Signup from '@/components/Templates/Signup';
import Login from '@/components/Organisms/Login';
import Signin from '@/components/Templates/Signin';
const archivo = Archivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={archivo}>
      {/* <AuthSidebar /> */}
      {/* <AuthSidebar2/> */}
      {/* <Register/> */}
      {/* <Signup /> */}
      {/* <Login/> */}
      <Signin/>
    </main>
  )
}
