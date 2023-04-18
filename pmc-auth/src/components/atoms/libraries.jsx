// IMPORT LIBARIES
import Image from "next/image";
import clsx from "clsx";
import ReCAPTCHA from "react-google-recaptcha";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight, SlArrowDown } from "react-icons/sl";

// EXPORT LIBARIES
export const Images = Image;
export const conditionalClass = clsx;
export const recapture = ReCAPTCHA;

export const EyeIcon = ({ type }) => {
  return (
    <>
      {type === "open" && <FiEye />}
      {type === "close" && <FiEyeOff />}
    </>
  );
};

export const ArrowIcon = ({ direction }) => {
  return (
    <>
      {direction === "left" && <SlArrowLeft />}
      {direction === "right" && <SlArrowRight />}
      {direction === "down" && <SlArrowDown />}
    </>
  );
};
