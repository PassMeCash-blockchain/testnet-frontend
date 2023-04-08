import React from 'react'
import { Heading } from '../atoms/Heading'
import Text from '../atoms/Text'
import Button from './../atoms/Button';

const WhatWeDoSection = (allWhatWeDoData) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
      <Heading level={4} className="border-b-4  border-greyColor px-4 lg:px-0">
        {}
      </Heading>
      <Heading level={1} className="">
        Learn More About Us
      </Heading>
      <Text className={`text-[16px] w-[400px]`}>
        PassMeCash is an exchange platform that connects users to the nearest
        agent, in exchange for cash or crypto. Our mission is to bridge the gap
        between our users and access to their funds through the world's most
        extensive financial system.
      </Text>
      <Button className="w-full bg-primaryColor text-white px-2 py-2">Learn More</Button>
    </div>
  )
}

export default WhatWeDoSection
