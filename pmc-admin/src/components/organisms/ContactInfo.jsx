import React from 'react'
import { userInfo } from '../array/Profile'
const ContactInfo = () => {
  return (
      <div className='border-2 border-edgeColor  pb-5 w-[400px] lg:w-[800px] px-3 py- flex flex-col gap-10'>
         {userInfo.map((x,i)=>(
                <div key={i}>
                <h2 className='font-bold'>{x.header}</h2>
             <div className='flex flex-col justify-between px-4 gap-10'>
             
              {x.details.map((x,i) => (
                <div key={`a${i}`}className='border-t-2 border-edgeColor flex justify-between items-center'>
                    <label>{x.title}</label>
                    <span>{x.desc}</span>
              </div>
              ))}
                 </div></div>
         ))}
        
      </div>
  )
}

export default ContactInfo