import ServiecesSection from "../templates/ServiecesSection";
import { clients, gqls } from "../atoms/libraries";

export async function fetchData() {
  const { data: servicesData } = await clients.query({
    query: gqls`
    query MyQuery {
      serviceSection(where: {id: "clgq8s6ai66ua0bjvfughxume"}) {
        servicesTitle
        s1Btn
        s1BtnLink
        s1Description
        s1Title
        s2Btn
        s2BtnLink
        s2Description
        s2Title
        s3Btn
        s3BtnLink
        s3Description
        s3Title
        s3Image {
          url
        }
        s2Image {
          url
        }
        s1Image {
          url
        }
      }
    }    
    `,
  });
  const allServicesData = servicesData.serviceSection;
  return {
    allServicesData,
  };
}

const Services = async () => {
  const res = await fetchData();

  const schema = {
    header: res.allServicesData.servicesTitle,
    sections: [
      {
        img: res.allServicesData.s1Image.url,
        icon: "/assets/service-icon1.svg",
        title: res.allServicesData.s1Title,
        text: res.allServicesData.s1Description,
        btn: { text: res.allServicesData.s1Btn, link: "" },
      },
      {
        img: res.allServicesData.s2Image.url,
        icon: "/assets/service-icon2.svg",
        title: res.allServicesData.s2Title,
        text: res.allServicesData.s2Description,
        btn: { text: res.allServicesData.s2Btn, link: "" },
      },
      {
        img: res.allServicesData.s3Image.url,
        icon: "/assets/service-icon3.svg",
        title: res.allServicesData.s3Title,
        text: res.allServicesData.s3Description,
        btn: { text: res.allServicesData.s3Btn, link: "" },
      },
    ],
  };

  return (
    <SectionSpacing className="md:px-0">
      <div className="grid gap-10 md:gap-0">
        {schema.sections.map((section, i) => (
          <div key={i}>
            <ServiecesSection
              header={schema.header}
              img={section.img}
              icon={section.icon}
              title={section.title}
              text={section.text}
              btnText={section.btn.text}
              btnLink={section.btn.link}
              inverted={i === 1 ? true : false}
            />
          </div>
        ))}
      </div>
    </SectionSpacing>
  );
};

export default Services;
