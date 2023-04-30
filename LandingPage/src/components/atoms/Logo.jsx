import Image from "next/image";
import { conditionalClass } from "./libraries";

const Logo = ({ width }) => {
  return (
    <div className={conditionalClass("relative", width)}>
      <Image src="/assets/logo.png" width={1000} height={1000} alt="Logo" />
    </div>
  );
};

export default Logo;
