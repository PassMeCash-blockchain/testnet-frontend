import { useState } from "react";
import clsx from "clsx";
import Icons from "../atoms/Icons";
import Image from "next/image";
import AvailableRequet from "../organisms/AvailableRequet";
import OngoingRequest from "../organisms/OngoingRequest";
import CompletedRequest from "../organisms/CompletedRequest";
import Button from "../atoms/Button";

const UserRequests = () => {
  const [table, setTable] = useState("Available Request");

  const tab = ["Available Request", "Ongoing Request", "Completed Request", ""];
  return (
    <div className="grid grid-rows-[auto_1fr] rounded-md pt-5 mt-5 min-h-[400px] max-h-[80vh]">
      {/* Header */}
      <div className="grid gap-5 grid-cols-[auto_auto_auto_1fr] items-center px-5">
        {tab.map((e, i) => (
          <p
            key={i}
            onClick={() => setTable(e)}
            className={clsx(
              "font-semibold text-sm cursor-pointer",
              table === e
                ? "text-[#874CF6] border-b-[3px] border-[#874CF6]"
                : "text-[#807A8B]"
            )}
          >
            {e}
          </p>
        ))}
      </div>

      {/* Transactions */}
      {table === "Available Request" && <AvailableRequet />}
      {table === "Ongoing Request" && <OngoingRequest />}
      {table === "Completed Request" && <CompletedRequest />}
    </div>
  );
};

export default UserRequests;
