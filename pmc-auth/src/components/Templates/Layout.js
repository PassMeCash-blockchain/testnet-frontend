import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-3">
      <div className="h-[100vh] bg-white">{children}</div>
      <div className="relative h-full col-span-2 bg-[#F2ECFE] grid place-items-center">
        <div>
          <Image
            src={"/assets/Assets-1.png"}
            width={450}
            height={450}
            alt="Recover PMC password"
          />
        </div>
      </div>
    </div>
  );
}
