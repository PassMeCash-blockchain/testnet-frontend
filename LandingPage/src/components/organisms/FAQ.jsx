import FAQCard from "../molecules/FAQCard";

const FAQ = () => {
  const schema = [
    {
      ques: "How does the cash request work?",
      ans: "I Nor Know the Answer.",
    },
    {
      ques: "Is it safe to request for my money?",
      ans: "I Nor Know the Answer.",
    },
    {
      ques: "How does the P2P work?",
      ans: "I Nor Know the Answer.",
    },
    {
      ques: "How does the cash request work?",
      ans: "I Nor Know the Answer.",
    },
  ];

  return (
    <div className="page-space mt-10 md:mt-20">
      <h2 className="text-3xl font-bold max-w-md leading-[45px] mx-auto text-center md:text-3xl md:leading-[67px]">
        Frequently Asked Questions
      </h2>

      <div className="grid gap-10 max-w-2xl mx-auto mt-10">
        {schema.map((faq, i) => (
          <FAQCard key={i} ques={faq.ques} ans={faq.ans} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
