import NavBar from "./components/NavBar";
import "./App.css";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container h-100 d-flex justify-content-center align-items-center dark-container'>
        <div className='main-text'>
          <h1>Hi! Nice to meet you!</h1>
          <h2>Abdullah Hamad at your service.</h2>
          <h3>I am a software engineer with a passion for building software!</h3>
        </div>
      </div> 
    </div>
  );
}

export default App;
