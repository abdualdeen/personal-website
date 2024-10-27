import NavBar from "../components/NavBar";
import ProjectButton from "../components/ProjectButton";

export default function Projects() {
  return (
    <>
      <NavBar />
      <div className="relative mx-auto mt-24 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-yellow-300 sm:text-4xl">
            Here are (some) projects I've worked on.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-neutral-400 sm:mt-4">
            Click on the title if you want to find out more.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {/* First card */}
          <div className="flex animate-fade-in-down flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="/projects/app_icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-neutral-700 p-6">
              <div className="flex-1">
                <a href="projects/weightapp" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-300">
                    Weight Tracking App
                  </p>
                  <p className="mt-3 text-base text-gray-400">
                    A user-friendly minimalist app that tracks your weight created using flutter.
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Second card */}
          <div className="flex animate-fade-in-down flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="/projects/submission_portal/6.png"
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-neutral-700 p-6">
              <div className="flex-1">
                <a href="projects/submissionportal" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-300">
                    Ticket Submission Portal and Dashboard
                  </p>
                  <p className="mt-3 text-base text-gray-400">
                    A ticket submission portal for clients to submit issues they
                    run into while using TylerTech technology programs. This,
                    along with a dashboard to view ticket progress.
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Third card */}
          <div className="flex animate-fade-in-down flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="/projects/gonephishing.png"
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-neutral-700 p-6">
              <div className="flex-1">
                <a
                  href="https://github.com/NathanKolbas/GonePhishing"
                  className="mt-2 block"
                >
                  <p className="text-xl font-semibold text-gray-300">
                    AI Phishing Extension
                  </p>
                  <p className="mt-3 text-base text-gray-400">
                    A chrome extension that uses an AI model to figure out if
                    links you see or the website you are on is malicious.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
