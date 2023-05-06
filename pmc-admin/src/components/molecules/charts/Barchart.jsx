"use client";

import { Line, Bar } from "react-chartjs-2";

const Barchart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Jan",
            " Februray",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
          ],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              //data in value
              data: [100, 300, 400],
            },
          ],
        }}
        //options is object
        options={{
          //legend is used for creating maps
          legend: { display: false },
          //title for displaing text
          title: { display: true, text: `Current state in` },
        }}
      />
    </div>
  );
};

export default Barchart;
