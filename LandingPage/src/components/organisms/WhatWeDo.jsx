import { Images } from '../atoms/libraries'
import WhatWeDoSection from '../molecules/WhatWeDoSection'
import { clients, gqls } from '../atoms/libraries';


export async function fetchData() {
  const {data: whatWeDoData} = await clients.query({
    query: gqls`
    query MyQuery {
whatWeDoSection(where: {id: "clg7scrao0zyc0bk6wr1ybxk8"}) {
  id
  wwdTitleBig
  wwdTitle
  wwdImage {
    url
  }
  wwdDescription
  wwdBtn
}
}
    `,
 });
 const allWhatWeDoData = whatWeDoData.whatWeDoSection;
 return {
  allWhatWeDoData
};
}
const WhatWeDo = async () => {
  const res = await fetchData()
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
          <WhatWeDoSection  />
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
