import React from 'react'
import { Heading } from '../atoms/Heading'
import InputField from './../atoms/InputField';
import { Images } from '../atoms/libraries';
import PassMeCash from '../../../public/assets/PassMeCash-Logo.png'
import Phone from '../molecules/phone';
import EyeLash from '../../../public/assets/EyeSlash.png'
const Register = () => {
  return (
    <div className='bg-universalColor w-1/2 min-h-screen mt-5 gap-5'>
      <Images src={PassMeCash} width={50} height={50}/>
          <Heading level={2} className={``}>Create Account</Heading>
      <Phone />
      <InputField className={`grid col-span-6 border-2 border-grayColor p-2`} placeHolder={`Password`} hasIcon={ !0} icon={EyeLash} />
    </div>
  )
}

export default Register