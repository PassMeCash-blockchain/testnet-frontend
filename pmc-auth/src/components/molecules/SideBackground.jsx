import clsx from "clsx";
import Image from "next/image";

const SideBackground = ({ img, title, text, className }) => {
  return (
    <div className={clsx("bg-[#F2ECFE] grid place-content-center", className)}>
      {/* Content */}
      <h2 className="text-[#874CF6] text-3xl text-center lg:text-[5xl]">
        {title}
      </h2>
      <p className="max-w-xl px-5 text-lg text-center mx-auto mt-7">{text}</p>

      {/* Background Image */}
      <div className="relative w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] mt-6 mx-auto">
        <Image src={img} fill alt="Background Image" />
      </div>
    </div>
  );
};

export default SideBackground;
