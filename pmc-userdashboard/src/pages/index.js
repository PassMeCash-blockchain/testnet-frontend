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
<<<<<<< HEAD
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserTransactions from "@/components/molecules/UserTransactions";
=======
import Menu from "@/components/molecules/Menu";

import SendToMatic from "@/components/molecules/SendToMatic";
import ChooseNetwork from "@/components/molecules/ChooseNetwork";
import MaticCard from "@/components/atoms/MaticCard";
>>>>>>> 53a4b73f9e9e3d5114fc7eef360dd952924084b7

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
<<<<<<< HEAD
      {/* <Input value="Schedule Payment"  type={`schedule`}/> */}
      <PageLayout>
        <UserBalance />
        <UserTransactions />
      </PageLayout>
=======

>>>>>>> 53a4b73f9e9e3d5114fc7eef360dd952924084b7
    </main>
  );
}
