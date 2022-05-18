import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />  
        <div id="about" className ="test1">
          <h1>about</h1>
        </div>
        <div id="session" className ="test1">
          <h1>session</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
