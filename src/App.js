import { useState } from "react";
import "./App.css";
import ListFooter from "./components/ListFooter/listFooter";
import ListHeader from "./components/ListHeader/listHeader";
import RadioList from "./components/RadioList/radioList";

function App() {
  const [ currentlyPlaying, setcurrentlyPlaying] = useState({
    title: "Putin FM",
    userCount: 666,
    url: "http://s2.cdnradio.ru/ru-mp3-128"
})
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader />
        <RadioList />
        <ListFooter
          currentlyPlaying={currentlyPlaying}
        />
      </div>
    </div>
  );
}

export default App;
