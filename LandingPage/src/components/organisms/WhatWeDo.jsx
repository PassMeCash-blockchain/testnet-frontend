import { Images } from '../atoms/libraries'
import WhatWeDoSection from '../molecules/WhatWeDoSection'
const WhatWeDo = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-[5rem]">
          <Images
            className="hidden lg:inline-block"
            src={`/assets/rocketboy.png`}
            width={200}
            height={200}
          />
          <WhatWeDoSection />
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
