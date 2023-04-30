import clsx from "clsx";
import Icons from "../atoms/Icons";

const UserTransactions = () => {
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

  const tableContent = [
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
  ];

  return (
    <div className="border border-[rgba(179, 179, 179, 0.5)] rounded-md p-5 mt-5">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto] items-center ">
        <h2 className="font-semibold text-xl">Transactions</h2>
        <button>See all</button>
      </div>

      {/* Transactions */}
      <div>
        {/* Search */}
        <div className="flex space-x-8 mt-5">
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
        <div className="mt-5">
          {/* Table Header */}
          <div className={clsx("", tableRowGrid)}>
            <div className="w-3 h-3 border border-black rounded-full"></div>
            {tableHeader.map((header, i) => (
              <h4 key={i} className="font-semibold">
                {header}
              </h4>
            ))}
          </div>

          {/* Table Content */}
          <div className="grid gap-5">
            {tableContent.map((transaction) => (
              <div className={clsx("text-sm mt-5", tableRowGrid)}>
                {/* receive or sent */}
                <div className="bg-[#F5F5F5] w-[30px] h-[30px] rounded-full grid place-items-center">
                  <Icons
                    type={transaction.action === "receive" ? "receive" : "send"}
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
  );
};

export default UserTransactions;
