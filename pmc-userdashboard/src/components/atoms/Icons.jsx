import {
  AiOutlineBank,
  AiOutlineQrcode,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  BsArrowUpLeft,
  BsArrowDownRight,
  BsInfinity,
  BsWallet,
  BsReceipt,
  BsCreditCard,
  BsPeople,
  BsPerson,
  BsCheckCircleFill,
  BsClockHistory,
} from "react-icons/bs";
import { CiBitcoin } from "react-icons/ci";
import { MdCurrencyBitcoin, MdClose, MdCurrencyExchange } from "react-icons/md";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { TbCurrencyNaira, TbSettings, TbArrowsUpDown } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  SlArrowLeft,
  SlArrowRight,
  SlArrowDown,
  SlBell,
  SlHome,
} from "react-icons/sl";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

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
      return <SlBell className={className} />;

    case "bitcoin":
      return <MdCurrencyBitcoin className={className} />;

    case "bitcoin-circle":
      return <CiBitcoin className={className} />;

    case "card":
      return <BsCreditCard className={className} />;

    case "check-circle":
      return <BsCheckCircleFill className={className} />;

    case "close":
      return <MdClose className={className} />;

    case "down":
      return <HiChevronDown className={className} />;

    case "dropdown":
      return <AiOutlineCaretDown className={className} />;

    case "exchange":
      return <TbArrowsUpDown className={className} />;

    case "home":
      return <BiHomeAlt2 className={className} />;

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

    case "people":
      return <BsPeople className={className} />;

    case "QRcode":
      return <AiOutlineQrcode className={className} />;

    case "receipt":
      return <BsReceipt className={className} />;

    case "receive":
      return <BsArrowDownRight className={className} />;

    case "right":
      return <SlArrowRight className={className} />;

    case "schedule":
      return <BsClockHistory className={className} />;

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
      return <BsPerson className={className} />;

    case "cancel":
      return <MdOutlineCancel />;

    case "wallet":
      return <BsWallet className={className} />;

    default:
      return <p>Pick an Icon Type</p>;
      break;
  }
};

export default Icons;
