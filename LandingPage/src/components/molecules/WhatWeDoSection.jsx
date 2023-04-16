import React from 'react'
import { Heading } from '../atoms/Heading'
import Text from '../atoms/Text'
import Button from './../atoms/Button';
import { clients, gqls } from '../atoms/libraries';

export async function fetchData() {
  const {data: whatWeDoData} = await clients.query({
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
  allWhatWeDoData
};
}

const WhatWeDoSection = async () => {
  const res = await fetchData();
  return (
    <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
      <Heading level={4} className="border-b-4  border-greyColor px-4 lg:px-0">
        {res.allWhatWeDoData.wwdTitle}
      </Heading>
      <data />
      <Heading level={1} className="">
        {res.allWhatWeDoData.wwdTitleBig}
      </Heading>
      <Text className={`text-[16px] w-[400px]`}>
        {res.allWhatWeDoData.wwdDescription}
      </Text>
      <Button className="w-full bg-primaryColor text-white px-2 py-2">{res.allWhatWeDoData.wwdBtn}</Button>
    </div>
  )
}



export default WhatWeDoSection;
