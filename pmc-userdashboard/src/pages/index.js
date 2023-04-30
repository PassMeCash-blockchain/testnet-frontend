import { Archivo } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserTransactions from "@/components/molecules/UserTransactions";
import MaticCard from "@/components/atoms/MaticCard";
import SendToMatic from "@/components/molecules/SendToMatic";
import ReceiveMatic from "@/components/molecules/ReceiveMatic";

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
      {/* <SendToMatic /> */}
      <ReceiveMatic />
    </main>
  );
}
