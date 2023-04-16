import { useRouter } from 'next/router'
import { sidebarnav } from '../atoms/sidebarnav'
import { Images } from '../atoms/libraries';
const Sidebar = () => {
    const router = useRouter();
  return (
      <div>
          {sidebarnav.map((e, key) => (
              <ul className='flex flex-col gap-5'>
                  <li onClick={() => router.push(e.link)} className='flex gap-5'>
                    <Images src={e.icon} width={30} height={10}/>
                     {e.title}
                  </li>
              </ul>
          ))}
    </div>
  )
}

export default Sidebar