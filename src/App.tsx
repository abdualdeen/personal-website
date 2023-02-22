import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex justify-center"> {/* this div exists only so the text div below can be centered. */}
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
