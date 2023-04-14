import React from 'react'
import Label from '../atoms/Label'
import InputField from '../atoms/InputField'

const Phone = () => {
  return (
      <div className="w-full lg:w-1/2">
          <div className='grid grid-cols-12 lg:grid-cols-6 gap-10'>
          <Label className={`col-span-4 lg:col-span-2 bg-none border-2  py-4 border-grayColor p-2 rounded-md text-grayColor`}>+234</Label>
          <InputField className={`border-2 border-grayColor p-2 col-span-8 lg:col-span-4`} placeHolder={`Phone Number`} />
      </div>
      </div>
  )
}

export default Phone