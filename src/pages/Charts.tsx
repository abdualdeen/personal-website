import NavBar from "../components/NavBar";
import BarChart from "../components/BarChart";
import { populationData } from "../assets/ChartsData";
import { useState } from "react";
import LineChart from "../components/LineChart";

export default function Charts() {
  const [popData, setPopData] = useState({
    labels: populationData.map((data) => data?.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((data) => data?.population),
      },
    ],
  });

  return (
    <>
      <NavBar />
      <div className="mt-20 flex justify-center"> {/* this div exists so the text div below can be centered. */}
        <div className="inline-block rounded-md bg-neutral-700 px-3 py-3">
          <div style={{ width: 800 }}>
            <BarChart chartData={popData} />
          </div>
          <div style={{ width: 800 }}>
            <LineChart chartData={popData} />
          </div>
        </div>
      </div>
    </>
  );
}
