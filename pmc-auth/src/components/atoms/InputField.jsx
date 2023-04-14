import React from 'react'
import { Images } from './libraries'

const InputField = ({onChange,className,type, icon, hasIcon=!1,placeHolder}) => {
  return (
    <>
      <input type={type} placeholder={placeHolder} className={`${className} bg-none rounded-md static`} onChange={onChange} />
      {!!hasIcon && 
         <Images className={` absolute top-[22%] left-[20rem] lg:left-[22rem] `} src={icon} width={20} height={5}/>
      }
    </>
  )
}

export default InputField
