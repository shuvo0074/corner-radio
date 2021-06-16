import { useState } from "react";
import "./App.css";
import ListFooter from "./components/ListFooter/listFooter";
import ListHeader from "./components/ListHeader/listHeader";
import RadioList from "./components/RadioList/radioList";
import { emptyItem } from "./const/radioList";

function App() {
  const [currentlyPlaying, setcurrentlyPlaying] = useState(emptyItem);
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader setcurrentlyPlaying={setcurrentlyPlaying} />
        <RadioList
          currentlyPlaying={currentlyPlaying}
          setcurrentlyPlaying={setcurrentlyPlaying}
        />
        <ListFooter currentlyPlaying={currentlyPlaying} />
      </div>
    </div>
  );
}

export default App;
