import NavBar from "../components/NavBar";
import BarChart from "../components/BarChart";
import { populationData, propertyCrimeData2020 } from "../assets/ChartsData";
import { useState } from "react";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

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

  const [crimeData, setCrimeData] = useState({
    labels: propertyCrimeData2020.map((data) => data.name),
    datasets: [
      {
        label: "Property Crimes",
        data: propertyCrimeData2020.map((data) => data.number),
      },
    ],
  });

  return (
    <>
      <NavBar />
      <div className="mt-20 flex justify-center">
        {/* the div above exists so the text div below can be centered. */}
        <div className="container mx-auto inline-block justify-center space-y-5 px-3 py-3">
          <h1 className="text-white">Nebraska's Population 1960 - 2022</h1>
          <div className="w-3/5">
            <BarChart chartData={popData} />
          </div>
          <div className="w-3/5">
            <LineChart chartData={popData} />
          </div>
          <div className="w-3/5">
            <PieChart chartData={crimeData} />
          </div>
        </div>
      </div>
    </>
  );
}
