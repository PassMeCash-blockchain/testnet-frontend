import { Archivo } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserTransactions from "@/components/molecules/UserTransactions";
import Header from "@/components/organisms/Header";
import MobileMenu from "@/components/organisms/MobileNav";

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
      <PageLayout>
        <UserBalance />
        <UserTransactions />
      </PageLayout>
    </main>
  );
}
