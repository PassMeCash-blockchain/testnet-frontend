import Image from "next/image";

const SideBackground = ({ img, title, text }) => {
  return (
    <div className="bg-[#F2ECFE] grid place-content-center">
      {/* Content */}
      <h2 className="text-[#874CF6] text-5xl text-center">{title}</h2>
      <p className="max-w-xl text-lg text-center mx-auto mt-7">{text}</p>

      {/* Background Image */}
      <div className="relative w-[500px] h-[500px] mt-6 mx-auto">
        <Image src={img} fill alt="Background Image" />
      </div>
    </div>
  );
};

export default SideBackground;
