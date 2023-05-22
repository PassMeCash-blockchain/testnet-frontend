import PickCryptoWallet from "@/components/molecules/PickCryptoWallet";
import SelectedCryptoWallet from "@/components/molecules/SelectedCryptoWallet";
import Icons from "@/components/atoms/Icons";
import UserTransactions from "@/components/molecules/UserTransactions";
import PageLayout from "@/components/templates/PageLayout";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

const BulkTransfer = () => {
  const cryptoWallets = [
    { coin: "MATIC", logo: "/assets/PolygonBadge.svg", amount: 500 },
    { coin: "BNB", logo: "/assets/PolygonBadge.svg", amount: 400 },
    { coin: "BTC", logo: "/assets/PolygonBadge.svg", amount: 300 },
    { coin: "DODGE", logo: "/assets/PolygonBadge.svg", amount: 700 },
    { coin: "TRON", logo: "/assets/PolygonBadge.svg", amount: 500 },
    { coin: "PI", logo: "/assets/PolygonBadge.svg", amount: 10000 },
  ];
  const [selectedWallet, setSelectedWallet] = useState({});

  const tableRowGrid =
    "grid gap-7 items-center grid-cols-[30px_3fr_3fr_3fr_3fr_3fr_2fr_2fr]";
  const tableHeader = [
    "Transaction ID",
    "Method",
    "Date",
    "Sender",
    "Receiver",
    "Amount",
    "Status",
  ];

  const transactions = [
    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "send",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Failed",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "ATM",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "POS",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Failed",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },

    {
      id: "#1234567890AD",
      action: "receive",
      method: "Transfer",
      date: "2/5/2020 06:24 AM",
      sender: "AyobamiBTC",
      receiver: "Tochukwu Ubah",
      amount: "-N12,768",
      status: "Successful",
    },
  ];

  return (
    <>
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
      <div className="border border-[rgba(179, 179, 179, 0.5)] grid grid-rows-[auto_1fr] rounded-md pt-5 mt-5 min-h-[400px] max-h-[80vh]  overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_auto] items-center px-5">
          <h2 className="font-semibold text-xl">Transactions</h2>
          {transactions.length > 0 && (
            <button className="text-[#874CF6]">See All</button>
          )}
        </div>

        {/* Transactions */}
        {transactions.length === 0 ? (
          <div className="grid place-content-center place-items-center gap-5 h-full">
            <div className="relative w-64">
              <Image
                src="/no-transaction.svg"
                width={1000}
                height={1000}
                alt="No Transaction Illustration"
              />
            </div>
            <p className="text-lg text-neutral-500 text-center">
              Your most recent transaction will show here.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden grid grid-rows-[auto_1fr]">
            {/* Search */}
            <div className="flex space-x-8 mt-5 px-5 pb-5">
              <div className="bg-[#F5F5F5] rounded-md grid grid-cols-[auto_1fr] gap-3 items-center px-4 py-2 max-w-xs">
                <Icons type="search" />
                <input
                  type="text"
                  placeholder="Search your transactions"
                  className="outline-none bg-transparent w-full"
                />
              </div>

              <div className="bg-[#F5F5F5] text-xl w-10 h-10 grid place-items-center rounded-full cursor-pointer">
                <Icons type="infinity" />
              </div>
            </div>

            {/* Table */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Side Fades */}
              <div className="absolute w-5 h-full top-0 left-0 bg-[linear-gradient(90deg,_white,_#fafafa,_transparent)]"></div>
              <div className="absolute w-5 h-full top-0 right-[5px] bg-[linear-gradient(270deg,_white,_#fafafa,_transparent)]"></div>

              <div className="w-full h-full overflow-auto table-scroll px-5">
                <div className="min-w-[960px]">
                  {/* Table Header */}
                  <div className={clsx(tableRowGrid)}>
                    <div className="w-3 h-3 border border-black rounded-full"></div>
                    {tableHeader.map((header, i) => (
                      <h4 key={i} className="font-semibold">
                        {header}
                      </h4>
                    ))}
                  </div>

                  {/* Table Content */}
                  <div className="grid">
                    {transactions.map((transaction, i) => (
                      <div
                        key={i}
                        className={clsx(
                          "text-sm py-5",
                          tableRowGrid,
                          i !== 0 &&
                            "border-t border-[rgba(179, 179, 179, 0.5)]"
                        )}
                      >
                        {/* receive or sent */}
                        <div className="bg-[#F5F5F5] w-[30px] h-[30px] rounded-full grid place-items-center">
                          <Icons
                            type={
                              transaction.action === "receive"
                                ? "receive"
                                : "send"
                            }
                          />
                        </div>

                        {/* Id */}
                        <p>{transaction.id}</p>

                        {/* Method */}
                        <p className="text-center bg-[#F5F5F5] rounded-md py-2">
                          {transaction.method}
                        </p>

                        {/* Date */}
                        <p>{transaction.date}</p>

                        {/* Sender */}
                        <p>{transaction.sender}</p>

                        {/* Receiver */}
                        <p>{transaction.receiver}</p>

                        {/* Amount */}
                        <p>{transaction.amount}</p>

                        {/* Status */}
                        <p
                          className={clsx(
                            transaction.status === "Successful"
                              ? "text-[#09D84E]"
                              : "text-[#EC0B0B]"
                          )}
                        >
                          {transaction.status}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BulkTransfer;
