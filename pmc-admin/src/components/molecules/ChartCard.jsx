import Image from "next/image";

const ChartCard = () => {
  const schema = [
    {
      total: "Total Visitors",
      percentage: "20% increase this month",
      previous: "15% Last Month",
      current: "45% This Month",
    },
    {
      total: "Total Transactions",
      percentage: "20% increase this month",
      previous: "15% Last Month",
      current: "45% This Month",
    },
    {
      total: "Total Requests",
      percentage: "20% increase this month",
      previous: "15% Last Month",
      current: "45% This Month",
    },
    {
      total: "Total Visitors",
      percentage: "20% increase this month",
      previous: "15% Last Month",
      current: "45% This Month",
    },
  ];
  return (
    <div className="flex gap-5">
      {schema.map((input, i) => (
        <div key={i}>
          <div className="px-3 border border-[#B3B3B3] rounded-lg">
            <div className="grid grid-cols-3 py-3 place-content-center">
              <div className="col-span-2">
                <h3 className="font-bold text-lg">{input.total}</h3>
                <p className="text-xs">{input.percentage}</p>
              </div>
              <div className="relative h-20 w-20">
                {/* <svg width="200" height="200">
                  <circle
                    r="70"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    stroke="lightgrey"
                    stroke-width="2rem"
                    stroke-dasharray="439.8"
                    stroke-dashoffset="0"
                  ></circle>
                  <circle
                    r="70"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    stroke="blue"
                    stroke-width="2rem"
                    stroke-dasharray="439.8"
                    stroke-dashoffset="66"
                  ></circle>
                </svg> */}
              </div>
            </div>
            <hr className="border-1"></hr>
            <div className="grid grid-cols-2 py-3">
              <div className="flex">
                <div className="relative h-5 w-5">
                  <Image src="assets/TrendDown.svg" fill alt="trend down" />
                </div>
                <p className="text-sm">{input.previous}</p>
              </div>
              <div className="grid place-self-end">
                <div className="flex">
                  <div className=" relative h-5 w-5">
                    <Image src="assets/TrendUp.svg" fill alt="trend down" />
                  </div>
                  <p className="text-sm">{input.current}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChartCard;
