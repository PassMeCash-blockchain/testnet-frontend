import {
  AiOutlineBank,
  AiOutlineQrcode,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { MdCurrencyBitcoin, MdClose } from "react-icons/md";
import { BsArrowUpLeft, BsArrowDownRight } from "react-icons/bs";
import {
  HiArrowPath,
  HiChevronDown,
  HiChevronRight,
  HiOutlineBell,
  HiMenu,
  HiOutlineCreditCard,
} from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { TbCurrencyNaira, TbSettings, TbArrowsUpDown } from "react-icons/tb";
import { RiUserFill } from "react-icons/";
import { GrHomeRounded } from "react-icons/gr";

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
      return <HiArrowPath className={className} />;

    case "setting":
      return <TbSettings className={className} />;

    case "user":
      return <RiUserFill />;

    default:
      return <p>Pick an Icon Type</p>;
      break;
  }
};

export default Icons;