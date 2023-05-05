import pmc from '/public/assets/pmc.png'
import { Images } from '../atoms/libraries'
import SideLink from './SideLink'
const Sidebar = () => {
  return (
      <div className='flex flex-col bg-primaryColor min-h-[100vh] w-[14vw] justify-start items-center pt-5'>
          <Images src={pmc} width={50} height={50} />
          <div className='mt-5'>
              <SideLink/>
          </div>
    </div>
  )
}

export default Sidebar