import ServiecesSection from "../templates/ServiecesSection";

const Services = async () => {
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
        btn: { text: "Get started", link: "" },
      },
    ],
  };

  return (
    <div className="grid gap-10 page-space mt-20 md:mt-40 md:gap-0 md:px-0">
      <h2 className="relative mx-auto w-max mb-5 text-2xl before:w-full before:h-[3px] before:absolute before:bg-[#E5D8FD] before:-bottom-1 md:hidden">
        {schema.header}
      </h2>
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
  );
};

export default Services;
