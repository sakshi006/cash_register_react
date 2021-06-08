import "./App.css";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="row">
      <Navbar />
      <div>
        <Form />
      </div>
      {/* <div className="col-md-7">List</div> */}
    </div>
  );
}

export default App;
