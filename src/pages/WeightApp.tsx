import NavBar from "../components/NavBar";

export default function WeightApp() {
  return (
    <>
      <NavBar />
      <div className="mt-15 container mx-auto px-4">
        <div className="flex flex-row justify-center">
          <div className="w-1/2 p-7">
            <img
              src="/projects/weight_app/1.png"
              alt="Image 1"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              The home page that displays your last recorded weight.
            </p>
          </div>
          <div className="w-1/2 p-7">
            <img
              src="/projects/weight_app/2.png"
              alt="Image 2"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              Shows a graph of your weight progress. You can select to view your
              progress by period.
            </p>
          </div>
          <div className="w-1/2 p-7">
            <img
              src="/projects/weight_app/3.png"
              alt="Image 3"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              A logged list of all your weight entries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
