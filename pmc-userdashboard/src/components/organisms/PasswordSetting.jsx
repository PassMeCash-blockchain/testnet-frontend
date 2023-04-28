import React from 'react'
import Button from '../atoms/Button'

const PasswordSetting = () => {
  return (
    <div className='w-[400px] lg:w-[800px] border-2 border-edgeColor rounded-md py-4 px-4 flex flex-col gap-5 lg:grid lg:grid-cols-[2fr,1fr] lg:place-content-between'>
      <div className='flex flex-col'>
          <h2 className='font-bold'>Password</h2>
          <p>Remember not to store your password in your email or cloud and don’t share it with anyone.</p>
      </div>
      <div className='relative lg:translate-y-[1rem] lg:translate-x-[6rem]'>
          <Button className={`px-4 py-2 border-2 border-secondaryColor rounded-md text-black`}>Change Password</Button>
      </div>
    </div>
  )
}

export default PasswordSetting