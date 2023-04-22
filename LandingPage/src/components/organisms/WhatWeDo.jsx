import Text from "../atoms/Text";
import Button from "../atoms/Button";
import SectionSpacing from "../templates/SectionSpacing";
import { Images, clients, gqls } from "../atoms/libraries";

export async function fetchData() {
  const { data: whatWeDoData } = await clients.query({
    query: gqls`
    query MyQuery {
whatWeDoSection(where: {id: "clg7scrao0zyc0bk6wr1ybxk8"}) {
  id
  wwdTitleBig
  wwdTitle
  wwdImage {
    url
  }
  wwdDescription
  wwdBtn
}
}
    `,
  });
  const allWhatWeDoData = whatWeDoData.whatWeDoSection;
  return {
    allWhatWeDoData,
  };
}
const WhatWeDo = async () => {
  const res = await fetchData();
  console.log(res.allWhatWeDoData.wwdImage.url);
  return (
    <SectionSpacing>
      <div className="grid gap-20 items-center container mx-auto md:grid-cols-[2fr_3fr] lg:max-w-4xl">
        {/* Illustration */}
        <div className="relative w-full h-[501px] hidden md:flex">
          <Images
            className="hidden md:flex"
            src={res.allWhatWeDoData.wwdImage.url}
            fill
            alt="Illustration"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="relative text-2xl text-center before:w-36 before:left-1/2 before:-translate-x-1/2 before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1 md:text-lg md:text-left md:before:w-24 md:before:left-0 md:before:translate-x-0">
            {res.allWhatWeDoData.wwdTitleBig}
          </h2>
          <h3 className="font-semibold text-4xl mt-8 text-center md:text-left">
            {res.allWhatWeDoData.wwdTitle}
          </h3>
          <Text className="text-[16px] mt-4 text-center md:text-left">
            {res.allWhatWeDoData.wwdDescription}
          </Text>
          <Button className="w-full bg-primaryColor text-white px-2 py-2 mt-8">
            {res.allWhatWeDoData.wwdBtn}
          </Button>
        </div>
      </div>
    </SectionSpacing>
  );
};

export default WhatWeDo;
