import Assets from '../../../public/assets/Assets.png'
import { Heading } from '../atoms/Heading'
import Text from '../atoms/Text'
import { Images } from '../atoms/libraries'
export const AuthSidebar2 = () => {
  return (
     <div className=' hidden lg:grid place-items-center bg-acctColor w-1/2 min-h-screen text-center px-6 py-4'>
          <Heading level={1} className={`text-primaryColor font-bold`}>Welcome Back</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ut deleniti fugit ratione voluptatibus dolor tempora unde qui necessitatibus praesentium nihil similique rem consequuntur animi alias magnam delectus, culpa optio?</Text>
          <Images src={Assets} width={500} height={100}/>
          
    </div>
  )
}
