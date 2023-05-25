import { Archivo } from "next/font/google";
import PageLayout from "@/components/templates/PageLayout";
import UserBalance from "@/components/molecules/UserBalance";
import UserTransactions from "@/components/molecules/UserTransactions";
import ThankYou from "@/components/molecules/ThankYou";
import ThanksModal from "@/components/molecules/ThanksModal";
import SendToRecipients from "@/components/molecules/SendToRecipients";
import TransferSucessful from "@/components/molecules/TransferSucessful";
import SelectRecipient from "@/components/molecules/SelectRecipient";
import BulkTranfer from "./bulkTransfer";
import SendTransferToBeneficiary from "@/components/molecules/SendTransferToBeneficiary";
import SendToPassMeCashAcct from "@/components/molecules/SendToPassMeCashAcct";
import SendToOtherBanks from "@/components/molecules/SendToOtherBanks";

const archivo = Archivo({ subsets: ["latin"] });

export default function Home() {
  return (
    <SendToOtherBanks/>
    // <main className={archivo.className}>
    //   <PageLayout>
    //     <BulkTranfer />
    //   </PageLayout>
    // </main>
  );
}
