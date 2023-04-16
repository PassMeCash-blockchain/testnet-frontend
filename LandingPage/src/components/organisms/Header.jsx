import Link from "next/link";
import Button from "../atoms/Button";
import SectionSpacing from "../templates/SectionSpacing";
import Image from "next/image";
import { clients, gqls } from '../atoms/libraries';
// import { useState } from "react";

export async function fetchData() {
  const {data: headerData} = await clients.query({
    query: gqls`
    query MyQuery {
      headerSection(where: {id: "clg7sui9o10mg0alep6las9b5"}) {
        buttons
        navCrypto
        navWwd
        headerLogo {
          url
        }
      }
    }
    `,
   });
 const allHeaderData = headerData.headerSection;
 return {
  allHeaderData
};
}


const Header = async () => {
  const res = await fetchData()
  //   const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <SectionSpacing>
      <div className="grid grid-cols-2 font-medium text-base items-center">
        <div className="flex gap-8">
          <div className="w-[66px] h-[36px]">
            <Image
              src="/assets/PassMeCash -Logo 1.png"
              width={5000}
              height={5000}
              alt="logo"
            />
          </div>
          <div className="text-inactiveColor items-center space-x-8 flex">
            <div className="flex gap-1">
              <Link href="">Crypto</Link>
              <Image
                src="/assets/icons/drop-down.svg"
                width={10}
                height={5}
                alt="logo"
              />
            </div>

            <Link href="">What we do</Link>
            <div className="flex gap-1">
              <Link href="">Our Services</Link>
              <Image
                src="/assets/icons/drop-down.svg"
                width={10}
                height={5}
                alt="logo"
              />
            </div>
            <Link href="">FAQ</Link>
          </div>
        </div>
        <div className="flex display-end items-center gap-8">
          <Button>Login</Button>
          <Button filled>Sign up</Button>
        </div>
      </div>
    </SectionSpacing>
  );
};

export default Header;
