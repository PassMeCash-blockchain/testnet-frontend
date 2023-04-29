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

import ProfileSetting from "@/components/organisms/ProfileSetting";
import ContactInfo from "@/components/organisms/ContactInfo";
import Menu from "@/components/molecules/Menu";


const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <ButtonRequest />
      <Sidebar/> */}
      {/* <Input type="" /> */}

      {/* <PasswordSetting />
      <PhoneSettings />
      <ProfileSetting />
      <ContactInfo/> */}
      {/* <Input value="Schedule Payment"  type={`schedule`}/> */}
      <Menu/>
    </main>
  );
}
