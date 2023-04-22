<<<<<<< HEAD
import { useRouter } from "next/router";
import { sidebarnav } from "../atoms/sidebarnav";
import { Images } from "../atoms/libraries";
const SideLink = () => {
  const router = useRouter();

  return (
    <div>
      {sidebarnav.map((e, key) => (
        <ul key={key} className="flex flex-col gap-5 pt-10">
          <li
            onClick={() => router.push(e.link)}
            className={`flex gap-5 text-white ${
              router.pathname === e.link && "Active"
            }`}
            key={key.id}
          >
            <Images src={e.icon} width={30} height={10} />
            {e.title}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SideLink;
=======
import { useRouter } from 'next/router'
import { sidebarnav } from '../atoms/sidebarnav'
import { Images } from '../atoms/libraries';
const SideLink = () => {
    const router = useRouter();
    
  return (
      <div>
          {sidebarnav.map((e, key) => (
              <ul className='flex flex-col gap-5 pt-10'>
              <li onClick={() => router.push(e.link)} className={`flex gap-5 text-white ${router.pathname === e.link && 'Active'}`} key={key.id}>
                    <Images src={e.icon} width={30} height={10}/>
                     {e.title}
                  </li>
              </ul>
          ))}
    </div>
  )
}

export default SideLink
>>>>>>> origin/main
