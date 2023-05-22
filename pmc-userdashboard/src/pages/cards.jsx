import { conditionalClass } from "@/components/atoms/libraries";
import PhysicalCards from "@/components/organisms/PhysicalCards";
import VirtualCards from "@/components/organisms/VirtualCards";
import PageLayout from "@/components/templates/PageLayout";
import { useState } from "react";

const Cards = () => {
  const [cardState, setCardState] = useState("virtual");
  const navs = [
    { title: "Virtual Cards", link: "virtual" },
    { title: "Physical Cards", link: "physical" },
  ];
  
  return (
    <PageLayout>
      {/* Nav */}
      <div className="grid grid-cols-2 gap-10 w-full max-w-md mx-auto">
        {navs.map((nav, i) => (
          <div
            key={i}
            className={conditionalClass(
              "cursor-pointer rounded-md text-center py-2",
              cardState === nav.link
                ? "bg-[#874CF6] text-white"
                : "bg-[#F5F5F5] text-[#392067]"
            )}
            onClick={() => setCardState(nav.link)}
          >
            {nav.title}
          </div>
        ))}
      </div>

      {/* States */}
      {cardState === "virtual" ? (
        <VirtualCards />
      ) : cardState === "physical" ? (
        <PhysicalCards />
      ) : (
        ""
      )}
    </PageLayout>
  );
};

export default Cards;