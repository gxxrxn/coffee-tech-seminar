import Header from "./components/Header/Header.js";
import About from "./components/About/About.js";
import Session from "./components/Session/Session.js";
import Notice from "./components/Notice/Notice.js";

import "./App.css";
import "./font.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Session />
      <Notice />
    </div>
  );
}

export default App;
