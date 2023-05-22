import { Archivo } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserRequests from "@/components/molecules/UserRequests";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={archivo.className}>
      <PageLayout>
        <UserBalance />
        <UserRequests />
      </PageLayout>
    </main>
  );
}
