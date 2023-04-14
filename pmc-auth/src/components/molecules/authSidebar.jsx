import React from 'react'
import { Heading } from '../atoms/Heading'
import Assets1 from '../../../public/assets/Assets-1.png'
import Text from '../atoms/Text'
import { Images } from '../atoms/libraries'

export const AuthSidebar = ({className}) => {
  return (
      <div className={`${className} hidden lg:flex`}>
        <div className=' place-items-center bg-tertiaryColor min-h-screen text-center px-6 py-4'>
          <Heading level={1} className={`text-primaryColor font-bold`}>Exchange Crypto for Cash</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut deleniti fugit ratione voluptatibus dolor tempora unde qui necessitatibus praesentium nihil similique rem consequuntur animi alias magnam delectus, culpa optio?</Text>
          <div className='flex justify-center'>
             <Images src={Assets1} width={600} height={100}/>
          </div>
         
          
    </div>
      </div>
  )
}
