import NavBar from "../components/NavBar";

export default function SubmissionPortal() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/1.png"
              alt="Image 1"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              This is the first screen you see in the submission portal. It
              clarifies what types of tickets can be submitted.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/2.png"
              alt="Image 2"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              Here you select the project the ticket should be about. You can
              also find the project by searching for it.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/3.png"
              alt="Image 3"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              This is where you fill out a full description of the issue.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/4.png"
              alt="Image 4"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              Summary of the ticket that will be submitted.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/5.png"
              alt="Image 5"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              Confirmation page for ticket submission.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/6.png"
              alt="Image 6"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              The dashboard login page which is used to track your ticket
              submission.
            </p>
          </div>
          <div className="w-11/12 p-7">
            <img
              src="/projects/submission_portal/7.png"
              alt="Image 7"
              className="mx-auto rounded-lg"
            />
            <p className="mt-2 text-center text-xl text-gray-300">
              The dashboard showing you recent submitted tickets.
              <br />
              <br />
              You can also checkout the portal live at the link below but please
              avoid submitting any actual tickets.
              <br />
              <a href="https://www.nebraska.gov/apps-support-portal/">
                www.nebraska.gov/apps-support-portal/
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
