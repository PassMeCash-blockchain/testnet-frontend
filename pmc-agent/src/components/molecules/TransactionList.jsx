import { clsxes, Texts, Images, Buttons } from "../atoms/libraries";
import InputField from "../atoms/InputField";

export const TransactionList = ({ type }) => {
  const transactions = [
    {
      icon: "/SVG/transaction_icon_down.svg",
      status: "pending",
      price: 15000.0,
    },
    {
      icon: "/SVG/transaction_icon_down.svg",
      status: "pending",
      price: 20000.0,
    },
    {
      icon: "/SVG/transaction_icon_up.svg",
      status: "successful",
      price: 20000.0,
    },
    {
      icon: "/SVG/transaction_icon_up.svg",
      status: "successful",
      price: 20000.0,
    },
    {
      icon: "/SVG/transaction_icon_up.svg",
      status: "successful",
      price: 20000.0,
    },
    {
      icon: "/SVG/transaction_icon_up.svg",
      status: "successful",
      price: 20000.0,
    },
  ];
  switch (type) {
    case "empty":
      return (
        <div className="grid grid-rows-2 gap-20 p-4">
          <div className="grid grid-cols-2">
            <Texts className="text-xl font-semibold">Transactions</Texts>
            <Texts className="text-sm font-normal text-[#874CF6] underline justify-self-end">
              See all
            </Texts>
          </div>
          <div className="grid place-items-center">
            <Images
              src="/SVG/empty_transaction_icon_up.svg"
              width={350}
              height={350}
              alt="Empty transaction"
            />
          </div>
        </div>
      );

    case "occupied":
      return (
        <div className="grid grid-rows-[auto 1fr] gap-6 p-4 max-h-max">
          <div className="grid grid-cols-2">
            <Texts className="text-2xl font-semibold">Transactions</Texts>
            <Texts className="text-sm font-normal text-[#874CF6] underline justify-self-end">
              See all
            </Texts>
          </div>
          <div>
            {transactions.map((transaction, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-[#B3B3B380] py-3"
              >
                <div className="flex space-x-2">
                  <Images
                    src={transaction.icon}
                    width={35}
                    height={35}
                    alt="successfull transaction icon on PMC"
                  />
                  <div>
                    <Texts className="text-base font-semibold">
                      Bank deposit
                    </Texts>
                    <Texts className="text-[#B3B3B3] text-xs">
                      Today, 14:30,{" "}
                      <span
                        className={clsxes(
                          transaction.status == "successful"
                            ? "text-[#8247E5]"
                            : "text-[#c9c911]"
                        )}
                      >
                        {transaction.status}
                      </span>
                    </Texts>
                    <Texts className="text-[#B3B3B3] text-xs">Have fun</Texts>
                  </div>
                </div>

                <Texts className="justify-self-end font-medium text-base leading-[140%]">
                  + {transaction.price}
                </Texts>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return <h6>Hello</h6>;
  }
};
