import React from 'react'
import Button from '../atoms/Button'
import Icons from '../atoms/Icons'

const PhoneSettings = () => {
  return (
    <div className="flex flex-col w-[400px] lg:w-[800px] border-2 border-edgeColor rounded-md">
      <div className="  py-4 px-4 flex flex-col gap-5 lg:grid lg:grid-cols-[2fr,1fr] lg:place-content-between">
        <div className="flex flex-col">
          <h2 className="font-bold">Phone numbers</h2>
          <p>Make sure to keep your primary phone number up-to-date.</p>
        </div>
        <div className="relative lg:translate-x-[4rem]">
          <Button
            className={`px-4 py-2 border-2 border-secondaryColor rounded-md text-black`}
          >
            Add Phonenumber
          </Button>
        </div>
      </div>
       <div className='py-4 px-4 flex gap-2 border-t-2 border-'>
         <Icons type="locked" />
        <div className="flex flex-col">
             <label>+xxxxxxx87</label>  
             <label>Verified</label>   
              </div>
              <Button filled className="bg-verify border-none !text-black rounded-md">primary</Button>
              
              
      </div>
    </div>
  )
}

export default PhoneSettings
