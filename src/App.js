import "./App.css";
import FormControls from "./Components/FormControls";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="row">
      <Navbar />
      <div>
        <FormControls />
      </div>
    </div>
  );
}

export default App;
