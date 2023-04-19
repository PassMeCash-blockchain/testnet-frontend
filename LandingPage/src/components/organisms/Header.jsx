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
        btnFilled
        btnFilledLink
        btnOutline
        btnOutlineLink
        c1
        c1Link
        c2
        c2Link
        navCrypto
        navFaq
        navServices
        navWwd
        os1
        os1Link
        os2
        os2Link
        os3
        os3Link
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
                  src={res.allHeaderData.headerLogo.url}
                  width={5000}
                  height={5000}
                  alt="logo"
              />
            </div>
            <div className="text-inactiveColor items-center space-x-8 flex">
              <div className="flex gap-1">
                <Link href="">{res.allHeaderData.navCrypto}</Link>
                <Image
                    src="/assets/icons/drop-down.svg"
                    width={10}
                    height={5}
                    alt="logo"
                />
              </div>

              <Link href="">{res.allHeaderData.navWwd}</Link>
              <div className="flex gap-1">
                <Link href="">{res.allHeaderData.navServices}</Link>
                <Image
                    src="/assets/icons/drop-down.svg"
                    width={10}
                    height={5}
                    alt="logo"
                />
              </div>
              <Link href="">{res.allHeaderData.navFaq}</Link>
            </div>
          </div>
          <div className="flex display-end items-center gap-8">
            <Button>{res.allHeaderData.btnOutline}</Button>
            <Button filled>{res.allHeaderData.btnFilled}</Button>
          </div>
        </div>
      </SectionSpacing>
  );
};

export default Header;
