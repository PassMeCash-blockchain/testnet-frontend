import React from 'react'
import Label from '../atoms/Label'
import InputField from '../atoms/InputField'

const Phone = () => {
  return (
      <div className="w-1/2">
          <div className='grid grid-cols-5 w-full gap-3'>
          <Label className={`col-span-1 bg-none border-2  border-grayColor p-2 rounded-md text-grayColor`}>+234</Label>
          <InputField className={`border-2 border-grayColor p-2 col-span-4`} placeHolder={`Phone Number`} />
      </div>
      </div>
  )
}

export default Phone