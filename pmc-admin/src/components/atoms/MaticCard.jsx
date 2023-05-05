import Image from "next/image";
import Icons from "./Icons";
const MaticCard = () => {
  return (
    <div className="w-72 h-56 bg-[#F4F4F4] rounded-xl p-3 grid grid-rows-[1fr_auto]">
      <div className="relative h-10 w-10">
        <Image src="assets/PolygonBadge.svg" fill alt="matic" />
      </div>
      <div>
        <h3 className="font-semibold text-2xl pb-[-2px]">0.00</h3>
        <p className="text-[#999999] text-lg inline-block align-top">MATIC</p>
      </div>
    </div>
  );
};

export default MaticCard;
