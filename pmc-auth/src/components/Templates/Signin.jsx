import { AuthSidebar2 } from '../molecules/authSidebar2'
import Login from '../Organisms/Login'

const Signin = () => {
  return (
     <div className={`w-full`}>
          <div className="grid grid-cols-3">
            <Login className={`col-span-12 w-full lg:col-span-1`}/>
            <AuthSidebar2 className={`col-span-2 w-full`}/>
          </div>
      </div>
  )
}

export default Signin