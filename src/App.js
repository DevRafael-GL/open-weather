import "./App.css";
import Api from "./Components/Api";
import Background from "./Components/Background/Background";
import Context from "./Context/Context";

function App() {
  return (
    <div className="App">
      <Context>
        <Api>
          <Background />
        </Api>
      </Context>
    </div>
  );
}

export default App;
