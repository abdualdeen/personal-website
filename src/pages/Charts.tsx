import NavBar from "../components/NavBar";
import BarChart from "../components/BarChart";
import {
  populationData,
  propertyCrimeData2020,
  propertyCrimeData2021,
} from "../assets/ChartsData";
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
        backgroundColor: ["rgb(253, 224, 71)"],
        borderColor: "rgb(253, 224, 71)",
      },
    ],
  });

  const [crimeData20, setCrimeData20] = useState({
    labels: propertyCrimeData2020.map((data) => data.name),
    datasets: [
      {
        label: "Property Crimes 2020",
        data: propertyCrimeData2020.map((data) => data.number),
      },
    ],
  });

  const [crimeData21, setCrimeData21] = useState({
    labels: propertyCrimeData2021.map((data) => data.name),
    datasets: [
      {
        label: "Property Crimes 2020",
        data: propertyCrimeData2021.map((data) => data.number),
      },
    ],
  });

  return (
    <>
      <NavBar />
      <div className="mt-20 flex items-center justify-center">
        {/* the div above exists so the text div below can be centered. */}
        <div className="container mx-auto inline-block justify-center space-y-5 px-3 py-3">
          <h1 className="text-center text-3xl text-yellow-300">
            Nebraska's Population 1960 - 2022
          </h1>
          <div className="mx-auto lg:w-3/5">
            <BarChart chartData={popData} />
          </div>
          <div className="mx-auto lg:w-3/5">
            <LineChart chartData={popData} />
          </div>
          <h6 className="text-center text-neutral-500">
            Source:{" "}
            <a
              className="underline"
              href="https://neo.ne.gov/programs/stats/inf/76.html"
            >
              State Energy Data Report
            </a>
          </h6>
          {/* Divider */}
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <h1 className="text-center text-3xl text-yellow-300">
            Nebraska's Property Crime Break Down
          </h1>
          <div className="mx-auto lg:columns-2 justify-center text-center">
            <div>
              <h3 className="text-2xl text-yellow-300">2020</h3>
              <div className="mx-auto lg:w-3/5 mb-10">
                <PieChart chartData={crimeData20} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-yellow-300">2021</h3>
              <div className="mx-auto lg:w-3/5">
                <PieChart chartData={crimeData21} />
              </div>
            </div>
          </div>
          <h6 className="text-center text-neutral-500">
            Source:{" "}
            <a
              className="underline"
              href="https://ncc.nebraska.gov/stat-reports"
            >
              Nebraska Crime Commission Reports
            </a>
          </h6>
        </div>
      </div>
    </>
  );
}
