import PickCryptoWallet from "@/components/molecules/PickCryptoWallet";
import SelectedCryptoWallet from "@/components/molecules/SelectedCryptoWallet";
import UserTransactions from "@/components/molecules/UserTransactions";
import PageLayout from "@/components/templates/PageLayout";
import { useState } from "react";

const CryptoWallets = () => {
  const cryptoWallets = [
    { coin: "MATIC", logo: "/assets/PolygonBadge.svg", amount: 500 },
    { coin: "BNB", logo: "/assets/PolygonBadge.svg", amount: 400 },
    { coin: "BTC", logo: "/assets/PolygonBadge.svg", amount: 300 },
    { coin: "DODGE", logo: "/assets/PolygonBadge.svg", amount: 700 },
    { coin: "TRON", logo: "/assets/PolygonBadge.svg", amount: 500 },
    { coin: "PI", logo: "/assets/PolygonBadge.svg", amount: 10000 },
  ];
  const [selectedWallet, setSelectedWallet] = useState({});

  return (
    <PageLayout>
      <div>
        {Object.keys(selectedWallet).length === 0 ? (
          <PickCryptoWallet
            cryptoWallets={cryptoWallets}
            setSelectedWallet={setSelectedWallet}
          />
        ) : (
          <SelectedCryptoWallet
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
          />
        )}
      </div>
      <UserTransactions />
    </PageLayout>
  );
};

export default CryptoWallets;
