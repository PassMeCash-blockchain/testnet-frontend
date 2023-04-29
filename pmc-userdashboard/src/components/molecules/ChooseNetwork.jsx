import Modal from "../atoms/Modal";

const ChooseNetwork = () => {
  const data = ["Solana", "Tenzo"];
  return (
    <Modal className={"p-3"}>
      <div className="grid justify-items-end">icon</div>
      <h3 className="font-semibold text-2xl py-5 text-center">
        Choose Network
      </h3>
      <div className="bg-[#F3AF0A] text-center h-fit p-3 w-full">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laborum
          est repellendus tenetur, fuga autem assumenda corporis quis ducimus
          ipsam porro esse perspiciatis exercitationem quia minima aspernatur
          quas illo rerum.
        </p>
      </div>
      <div className="py-3">
        {data.map((item) => (
          <div
            key={item}
            className="h-12 w-full bg-[#F5F5F5] p-3 rounded-md gap-3"
          >
            {item}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ChooseNetwork;
