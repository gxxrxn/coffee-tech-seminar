import logo from "./logo.svg";
import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Session from "./components/Session/Session.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Session />
    </div>
  );
}

export default App;
