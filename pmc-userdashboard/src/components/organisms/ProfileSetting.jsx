import React from 'react'
import { Images } from '../atoms/libraries'
import Button from '../atoms/Button'
import User from '../../../public/assets/user.png'
const ProfileSetting = () => {
  return (
      <div className='grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-6 place-content-between w-[400px] lg:w-[800px] px-4 py-2 border-2 border-edgeColor'>
          <div className='col-span-1'>
              <Images src={User} width={100} height={100} alt='profilepic' className='rounded-full' />
          </div>
        <div className="col-span-5 flex justify-between items-center">
                      <div className='flex flex-col justify-center'>
                   <label className='font-bold text-lg'>Mary Chukwuemeka</label>
                   <label>janedoe@gmail.com</label>
              </div>
          <div className="">
              <Button className={`text-secondaryColor px-4 py-2 border-2 border-secondaryColor`}>Edit Profile photo</Button>
          </div>
        </div>

      </div>
  )
}

export default ProfileSetting