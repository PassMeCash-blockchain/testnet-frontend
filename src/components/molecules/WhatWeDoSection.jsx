import React from 'react'
import { Heading } from '../atoms/Heading'
import Text from '../atoms/Text'

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col">
      <Heading level={4} className="">
        What we do
      </Heading>
      <Heading level={1} className="text">
        Learn More About Us
      </Heading>
      <Text className={`text-[16px]`}>
        PassMeCash is an exchange platform that connects users to the nearest
        agent, in exchange for cash or crypto. Our mission is to bridge the gap
        between our users and access to their funds through the world's most
        extensive financial system.
      </Text>
    </div>
  )
}

export default WhatWeDoSection
