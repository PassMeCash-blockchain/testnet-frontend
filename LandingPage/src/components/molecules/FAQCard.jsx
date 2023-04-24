"use client";

import { useState } from "react";
import Icons from "../atoms/Icons";

const FAQCard = ({ ques, ans }) => {
  const [showAns, setShowAns] = useState(false);
  return (
    <div className="border-b border-[#4D4D4D] pb-3">
      <div className="grid grid-cols-[1fr_auto]">
        <p className="text-xl font-medium">{ques}</p>
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setShowAns(!showAns)}
        >
          {showAns ? <Icons type="minus" /> : <Icons type="plus" />}
        </div>
      </div>
      {showAns && <p className="text-neutral-600 pt-3">{ans}</p>}
    </div>
  );
};

export default FAQCard;
