import "./App.css";
import Api from "./Components/Api";
import Background from "./Components/Background/Background";

function App() {
  return (
    <div className="App">
      <Api>
        <Background />
      </Api>
    </div>
  );
}

export default App;
