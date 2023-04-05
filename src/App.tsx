import NavBar from "./components/NavBar";
import "./App.css";
import Letter from "./components/Letter";
import ScrollingHello from "./components/ScrollingHello";
import ProgrammingIconsList from "./components/ProgrammingIconsList";
import Pacman from "./components/Pacman";

// The app is also the home page. I could have added a separate home page but I felt that would clutter the project and add yet another layer that is not needed.
// There is the index.html, then the main.tsx, and app.tsx. Enough clutter.
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="mt-24 flex justify-center">
        {/* the div above exists so the text div below can be centered. */}
        <div className="inline-block rounded-md px-3 py-3 text-center text-xl text-white">
          <ScrollingHello />
          <h2 className="text-yellow-300">Abdullah Hamad</h2>
          <h3 className="text-neutral-500">
            A software engineer with a passion for building software!
          </h3>
          <div className="mt-20">
            <Pacman className="mx-auto" />
          </div>
          <div className="mt-20">
            <h4>
              Here are programming languages or libraries I am familiar with
            </h4>
            <div className="rounded-md bg-neutral-700">
              <ProgrammingIconsList />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <h4 className="text-neutral-500">
          Wanna get in touch? Checkout my{" "}
          <a
            className="text-yellow-300"
            href="https://drive.google.com/file/d/1sIXq61oS_ZhjwDxb_AsBkpBKWlRYuw4p/view"
          >
            Resume
          </a>{" "}
          for my contact information or{" "}
          <a
            className="text-yellow-300"
            href="https://www.linkedin.com/in/abdullah-hamad-530a55257/"
          >
            LinkedIn
          </a>
        </h4>
      </div>
    </div>
  );
}

export default App;
