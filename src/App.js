import { useState } from "react";
import "./App.css";
import ListFooter from "./components/ListFooter/listFooter";
import ListHeader from "./components/ListHeader/listHeader";
import RadioList from "./components/RadioList/radioList";

function App() {
  const [currentlyPlaying, setcurrentlyPlaying] = useState({
    id: -1,
    title: "",
    userCount: 0,
    url: "",
  });
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader />
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
