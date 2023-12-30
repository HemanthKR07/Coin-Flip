import "./Styles/App.css";
import UI1 from "./UI1";
import b1 from "./55.png";
// import UI from "./UI";

function App() {
  return (
    <div className="App">
      <img src={b1} alt="" className="background1" />
      <UI1 />
      {/* <UI /> */}
    </div>
  );
}

export default App;
