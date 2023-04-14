import Register from '../Organisms/Register'
import { AuthSidebar } from '../molecules/authSidebar'

const Signup = () => {
  return (
      <div className={`w-full`}>
          <div className="grid grid-cols-3">
            <Register className={`col-span-12 w-full lg:col-span-1`}/>
            <AuthSidebar className={`col-span-2 w-full`}/>
          </div>
      </div>
  )
}

export default Signup