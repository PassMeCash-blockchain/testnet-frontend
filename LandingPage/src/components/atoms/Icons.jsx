import { AiFillInstagram, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import { HiChevronDown, HiOutlinePlus, HiMenu, HiMinus } from "react-icons/hi";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

const Icons = ({ type, className }) => {
  switch (type) {
    case "close-circle":
      return <AiOutlineCloseCircle className={className} />;

    case "down":
      return <HiChevronDown className={className} />;

    case "dropdown":
      return <BsCaretDownFill className={className} />;

    case "facebook":
      return <ImFacebook className={className} />;

    case "instagram":
      return <AiFillInstagram className={className} />;

    case "linkedIn":
      return <ImLinkedin2 className={className} />;

    case "menu":
      return <HiMenu className={className} />;

    case "minus":
      return <HiMinus className={className} />;

    case "plus":
      return <HiOutlinePlus className={className} />;

    case "twitter":
      return <ImTwitter className={className} />;

    default:
      return <p>Pick an Icon type!</p>;
  }
};

export default Icons;
