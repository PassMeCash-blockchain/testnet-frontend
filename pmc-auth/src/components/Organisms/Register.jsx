import { Heading } from '../atoms/Heading'
import InputField from './../atoms/InputField'
import { Images } from '../atoms/libraries'
import PassMeCash from '../../../public/assets/PassMeCash-Logo.png'
import Phone from '../molecules/phone'
import EyeLash from '../../../public/assets/EyeSlash.png'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import { ReCapture } from '../molecules/reCapture'
const Register = ({ className }) => {
  return (
    <div className={`${className} w-full`}>
      <div className="bg-universalColor  min-h-screen text p-5 w-full">
        <div className="flex justify-center lg:justify-start">
          <Images src={PassMeCash} width={50} height={50} />
        </div>

        <Heading level={2} className={`text-center lg:text-left`}>
          Create Account
        </Heading>
        <div className="space-y-5 mt-5">
          <Phone />
          <InputField
            className={`w-full lg:w-[24rem] border-2 border-grayColor p-2`}
            placeHolder={`Password`}
            hasIcon={!0}
            icon={EyeLash}
          />
          <Text className={`text-center w-[24rem]`}>
            Use at least 8 characters -1 uppercase letter, 1 number and 1 symbol
          </Text>
          <Button filled className={`w-full `}>
            Sign Up
          </Button>
          <Text className={`text-center w-[24rem]`}>
            Already registered? Log in
          </Text>
          <ReCapture />
          <Text className={`text-center w-[24rem]`}>
            By signing up I agree to the <b>Terms of Use</b>, and consent to the
            processing of my personal and biometric data as stated in the{' '}
            <b>Privacy Policy.</b>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Register
