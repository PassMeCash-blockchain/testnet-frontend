import SectionSpacing from "../templates/SectionSpacing";
import ServiecesSection from "../templates/ServiecesSection";
import { clients } from "../components/atoms/libraries";
import { gqls } from "../components/atoms/libraries";

export async function fetchData() {
  
}

const Services = () => {
  const schema = {
    header: "Our Services",
    sections: [
      {
        img: "/assets/service-img1.png",
        icon: "/assets/service-icon1.svg",
        title: "Request Money",
        text: "We understand how difficult it is to get your fund when you try to make a withdrawal. That is why we are making it seamless for our users to make a quick request of their money that can be delivered to you from any of our close agents by bank transfer or a meeting point.",
        btn: { text: "Make Request", link: "" },
      },
      {
        img: "/assets/service-img2.png",
        icon: "/assets/service-icon2.svg",
        title: "Order for spray bills",
        text: "We understand how difficult it is to get lower currency bills to use in spraying celebrants at parties and other activities. That is why we are making it seamless for our users to request for any of our currency bills and it will be delivered to you through any of our closest agents.",
        btn: { text: "Make Request", link: "" },
      },
      {
        img: "/assets/service-img3.png",
        icon: "/assets/service-icon3.svg",
        title: "Transfer & Receive Money",
        text: "We understand how stressful it is to get cash at hand when money is sent to you. That is why we are making it stressless to send and receive money instantly via cash or cryptocurrency.",
        btn: { text: "Get Started", link: "" },
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
