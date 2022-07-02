import "./App.css";
import First from "./containers/First";
import Second from "./containers/Second";
import Zero from "./containers/Zero";
import Third from "./containers/Third";

function App() {
  return (
    <div className='App' style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Zero />
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default App;
