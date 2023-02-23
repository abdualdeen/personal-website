import NavBar from "./components/NavBar";
import "./App.css";

// The app is also the home page. I could have added a separate home page but I felt that would clutter the project and add yet another layer that is not needed.
// There is the index.html, then the main.tsx, and app.tsx. Enough clutter.
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex justify-center mt-20"> {/* this div exists so the text div below can be centered. */}
        <div className="inline-block rounded-md bg-neutral-700 text-center text-xl text-white px-3 py-3">
          <h1>Hi! Nice to meet you!</h1>
          <h2>Abdullah Hamad at your service.</h2>
          <h3>
            I am a software engineer with a passion for building software!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
