import { Heading } from '../atoms/Heading'
import InputField from './../atoms/InputField'
import { Images } from '../atoms/libraries'
import PassMeCash from '../../../public/assets/PassMeCash-Logo.png'
import Phone from '../molecules/phone'
import EyeLash from '../../../public/assets/EyeSlash.png'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import { ReCapture } from '../molecules/reCapture'

const Login = () => {
  return (
    <div className="bg-universalColor w-full lg:w-1/2 min-h-screen text p-5">
      <div className="flex justify-center lg:justify-start">
        <Images src={PassMeCash} width={50} height={50} />
      </div>

      <Heading level={2} className={`text-center lg:text-left`}>
        Login
      </Heading>
      <div className="space-y-5 mt-5">
        <InputField
          className={`w-full lg:w-[24rem] border-2 border-grayColor p-2`}
          placeHolder={`Phone Number / Email Address`}
          hasIcon={!1}
        />
        <InputField
          className={`w-full lg:w-[24rem] border-2 border-grayColor p-2`}
          placeHolder={`Password`}
          hasIcon={!0}
          icon={EyeLash}
        />
        <Text className={`text-center lg:text-right w-[24rem]`}>
          Forget Password?
        </Text>

        <ReCapture />
        <Text className={`text-center w-[24rem]`}>
          By signing up I agree to the <b>Terms of Use</b>, and consent to the
          processing of my personal and biometric data as stated in the{' '}
          <b>Privacy Policy.</b>
        </Text>

        <Button filled className={`w-full lg:w-1/2`}>
          Log in
        </Button>
      </div>
    </div>
  )
}

export default Login
