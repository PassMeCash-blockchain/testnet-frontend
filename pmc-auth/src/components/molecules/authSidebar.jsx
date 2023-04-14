import React from 'react'
import { Heading } from '../atoms/Heading'
import Assets1 from '../../../public/assets/Assets-1.png'
import Image from 'next/image'
import Text from '../atoms/Text'

export const AuthSidebar = () => {
  return (
      <div className='grid place-items-center bg-tertiaryColor w-1/2 min-h-screen text-center px-6 py-4'>
          <Heading level={1} className={`text-primaryColor font-bold`}>Exchange Crypto for Cash</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut deleniti fugit ratione voluptatibus dolor tempora unde qui necessitatibus praesentium nihil similique rem consequuntur animi alias magnam delectus, culpa optio?</Text>
          <Image src={Assets1} width={500} height={100}/>
          
    </div>
  )
}
