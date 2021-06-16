import "./App.css";
import ListHeader from "./components/ListHeader/listHeader";
import RadioList from "./components/RadioList/radioList";

function App() {
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader />
        <RadioList/>
      </div>
    </div>
  );
}

export default App;
