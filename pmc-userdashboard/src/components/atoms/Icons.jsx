import {
  AiOutlineBank,
  AiOutlineQrcode,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { BsArrowUpLeft, BsArrowDownRight, BsInfinity } from "react-icons/bs";
import { MdCurrencyBitcoin, MdClose, MdCurrencyExchange } from "react-icons/md";
import {
  HiChevronDown,
  HiChevronRight,
  HiOutlineBell,
  HiMenu,
  HiOutlineCreditCard,
} from "react-icons/hi";
import { HiArrowPath } from "react-icons/hi2";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { TbCurrencyNaira, TbSettings, TbArrowsUpDown } from "react-icons/tb";
import { RiUserFill, RiLockPasswordFill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { SlArrowLeft, SlArrowRight, SlArrowDown } from "react-icons/sl";
import { AiOutlineFieldTime } from "react-icons/ai";

export const ArrowIcon = ({ direction }) => {
  return (
    <>
      {direction === "left" && <SlArrowLeft />}
      {direction === "right" && <SlArrowRight />}
      {direction === "down" && <SlArrowDown />}
    </>
  );
};

const Icons = ({ type, className }) => {
  switch (type) {
    case "bank":
      return <AiOutlineBank className={className} />;

    case "bell":
      return <HiOutlineBell className={className} />;

    case "bitcoin":
      return <MdCurrencyBitcoin className={className} />;

    case "card":
      return <HiOutlineCreditCard className={className} />;

    case "closde":
      return <MdClose className={className} />;

    case "down":
      return <HiChevronDown className={className} />;

    case "dropdown":
      return <AiOutlineCaretDown className={className} />;

    case "exchange":
      return <TbArrowsUpDown className={className} />;

    case "home":
      return <GrHomeRounded className={className} />;

    case "infinity":
      return <BsInfinity className={className} />;

    case "locked":
      return <RiLockPasswordFill className={className} />;

    case "menu":
      return <HiMenu className={className} />;

    case "more":
      return <FiMoreHorizontal className={className} />;

    case "naira":
      return <TbCurrencyNaira className={className} />;

    case "QRcode":
      return <AiOutlineQrcode className={className} />;

    case "receive":
      return <BsArrowDownRight className={className} />;

    case "right":
      return <HiChevronRight className={className} />;

    case "send":
      return <BsArrowUpLeft className={className} />;

    case "swap":
      return <MdCurrencyExchange className={className} />;

    case "search":
      return <FiSearch className={className} />;

    case "setting":
      return <TbSettings className={className} />;

    case "timer":
      return <AiOutlineFieldTime className={className} />;

    case "user":
      return <RiUserFill className={className} />;

    default:
      return <p>Pick an Icon Type</p>;
      break;
  }
};

export default Icons;
