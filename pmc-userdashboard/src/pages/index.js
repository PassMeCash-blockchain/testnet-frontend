import Image from "next/image";
import { Archivo } from "next/font/google";
import ButtonRequest from "@/components/molecules/ButtonRequest";
import Sidebar from "@/components/organisms/Sidebar";
import Input from "@/components/atoms/Input";
import PasswordSetting from "@/components/organisms/PasswordSetting";
import PhoneSettings from "@/components/organisms/PhoneSettings";
import SeconUserModal from "@/components/molecules/SecondUserModal";
import ThanksModal from "@/components/molecules/ThanksModal";
// import UserModal from "@/components/molecules/SecondUserModal";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <ButtonRequest />
      <Sidebar/> */}
      {/* <Input type="" /> */}
      {/* <PasswordSetting />
      <PhoneSettings/> */}
      {/* <SeconUserModal /> */}
      <ThanksModal />
    </main>
  );
}
