import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main style={archivo}>
      {/* <AuthSidebar /> */}
      {/* <AuthSidebar2/> */}
      {/* <Register/> */}
      {/* <Signup /> */}
      {/* <Login/> */}
      {/* <Signin/> */}
    </main>
  );
}
