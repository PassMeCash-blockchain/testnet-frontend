import { Archivo } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserTransactions from "@/components/molecules/UserTransactions";
import Send from "@/components/organisms/Send";
import RequestCash from "@/components/molecules/RequestCash";
import DeliverCash from "@/components/molecules/DeliverCash";
import CompletedCashRequest from "@/components/molecules/CompletedCashRequest";
import ConfirmCash from "@/components/molecules/ConfirmCash";
import CancelCashRequest from "@/components/molecules/CancelCashRequest";
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
