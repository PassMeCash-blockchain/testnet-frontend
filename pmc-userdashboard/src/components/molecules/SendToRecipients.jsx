import Icons from "../atoms/Icons";
import Modal from "../templates/Modal";
import Image from "next/image";

const SendToRecipients = () => {
  const data = [
    {
      id: "1",
      name: "Favour Scofield",
      cash: "N500",
      acc: "GTBank-0937826378",
    },
    {
      id: "1",
      name: "Favour Scofield",
      cash: "N500",
      acc: "GTBank-0937826378",
    },
    {
      id: "1",
      name: "Favour Scofield",
      cash: "N500",
      acc: "GTBank-0937826378",
    },
    {
      id: "1",
      name: "Favour Scofield",
      cash: "N500",
      acc: "GTBank-0937826378",
    },
  ];
  return (
    <div className="">
      <div className="h-fit w-1/3 border border-blacks p-3">
        <div className="flex gap-2 content-center p-3 rounded-md shadow-sm w-full align-middle">
          <Icons type="right" />
          <h3 className="text-lg">Send To Recipient(s)</h3>
        </div>
        <h1 className="text-start font-semibold py-3 text-2xl">Recipients</h1>
        {data.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-md shadow-sm w-full grid grid-cols-2 gap-2"
          >
            <div className="flex gap-2">
              <span className="text-sm">{item.id}</span>
              <div className="text-sm">
                <div>{item.name}</div>
                <div>{item.cash}</div>
                <div>{item.acc}</div>
              </div>
            </div>
            <div className="flex gap-3 justify-self-end">
              <div className="relative h-8 w-8 grid justify-self-center">
                <Image
                  src="/assets/PencilSimpleLine.svg"
                  fill
                  alt="transaction complete"
                />
              </div>
              <div className="relative h-8 w-8 grid justify-self-center">
                <Image
                  src="/assets/Trash.svg"
                  fill
                  alt="transaction complete"
                />
              </div>
            </div>
          </div>
        ))}
        <button className="text-white bg-[#874CF6] p-3 rounded-lg w-full mt-8">
          Proceed to payment
        </button>
        <button className="text-[#874CF6] border border-[#874CF6] p-3 w-full rounded-lg mt-3">
          Add Another Account
        </button>
      </div>
    </div>
  );
};

export default SendToRecipients;
