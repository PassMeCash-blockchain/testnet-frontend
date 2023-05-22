import Icons from "../atoms/Icons";
const SelectRecipient = () => {
  const data = [
    {
      icon: "icon",
      name: "PMC",
    },
    {
      icon: "",
      name: "To other Bank",
    },
    {
      icon: "",
      name: "Bulk Transfer",
    },
    {
      icon: "",
      name: "Transfer to Beneficiary",
    },
    {
      icon: "",
      name: "Send QR code",
    },
  ];
  return (
    <div className="grid place-items-center self-center">
      <div className="h-fit w-1/3 border border-blacks p-3">
        <div className="flex gap-2">
          <Icons type="right" />
          <h3 className="text-lg">Send To Recipient(s)</h3>
        </div>
        {data.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded-md shadow-sm w-full grid grid-cols-3 my-2 bg-[#F5F5F5]"
          >
            <div className="w-fit">{item.icon}</div>
            <div className="grid justify-self-start">{item.name}</div>
            <div className="grid justify-self-end">
              <Icons type="right" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRecipient;
