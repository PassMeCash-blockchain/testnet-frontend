import { Images } from "../atoms/libraries"
import WhatWeDoSection from "../molecules/WhatWeDoSection"
const WhatWeDo = () => {
  return (
      <div className='flex justify-between items-center'>
      <Images src={`/../../public/assets/rocketboy.png`} width={ 200}  height={200}/>
          <WhatWeDoSection/>
      </div>
  )
}

export default WhatWeDo