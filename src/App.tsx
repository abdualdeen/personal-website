import NavBar from "./components/NavBar";
import "./App.css";
import ScrollingHello from "./components/ScrollingHello";
import ProgrammingIconsList from "./components/ProgrammingIconsList";
import Pacman from "./components/Pacman";
import WebsiteIconList from './components/WebsiteIconList';

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
          <h1 className="text-yellow-300 text-3xl">Abdullah Hamad</h1>
          <h3 className="text-neutral-500 text-xl">
            Hi! This website was created to show some of what I am capable of. Don't worry though! I can do a lot more.
            <br/>
            Checkout the menu to see more of my projects in Github, and some simple charts I built as a demo!
          </h3>
          
          <h4 className='mt-10'>This website was built using these technologies:</h4>
          <div className="">
              <WebsiteIconList />
            </div>
          <div className="mt-20">
            <Pacman className="mx-auto" />
          </div>
          <div className="mt-20 text-2xl">
            <h4>
              Here are programming languages, libraries and tools I am familiar with:
            </h4>
            <div className="rounded-md bg-neutral-700">
              <ProgrammingIconsList />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 flex justify-center text-center">
        <h4 className="text-neutral-500 text-xl">
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
