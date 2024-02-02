import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./components/MyComponent";

/**
 * function component(normal, arrow)
 * @returns
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
