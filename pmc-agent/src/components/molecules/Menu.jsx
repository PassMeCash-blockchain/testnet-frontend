import React from 'react'
import Button from '../atoms/Button'
import Icons from '../atoms/Icons'

const Menu = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-center">
        <div className={`w-[50px] h-[50px] bg-primaryColor flex justify-center items-center rounded-full px-2 py-2`}>
        <Icons type="receive" className="text-white text-[26px]" />
      </div>
       <span>Receive</span>
      </div>
      

    <div className="flex flex-col items-center">
          <div className={`w-[50px] h-[50px] bg-primaryColor flex justify-center items-center rounded-full px-2 py-2`}>
            <Icons type="swap" className="text-white text-[26px]"/>
          </div>
           <span>Swap</span>
       </div>
      <div className="flex flex-col items-center">
        <div className={`w-[50px] h-[50px] bg-primaryColor flex justify-center items-center rounded-full px-2 py-2`}>
          <Icons type="send" className="text-white text-[26px]"/>
        </div>
        <span>Send</span>
      </div>
      <div className="flex flex-col items-center">
        <div className={`w-[50px] h-[50px] bg-primaryColor flex justify-center items-center rounded-full px-2 py-2`}>
        <Icons type="more" className="text-white text-[26px]"/>
      </div>
      <span>more</span>
      </div>
      

    </div>
  )
}

export default Menu