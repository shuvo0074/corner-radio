import { useState } from "react";
import "./App.css";
import ListFooter from "./components/ListFooter/listFooter";
import ListHeader from "./components/ListHeader/listHeader";
import RadioList from "./components/RadioList/radioList";
import { emptyItem } from "./const/radioList";

function App() {
  const [currentlyPlaying, setcurrentlyPlaying] = useState(emptyItem);
  function playRadio(data){
    const audioPlayer= document.getElementById("audioPlayer")
    setcurrentlyPlaying(data)
    audioPlayer.src=data.url
    audioPlayer.play()
  }
  function stopRadio(){
    const audioPlayer= document.getElementById("audioPlayer")
    audioPlayer.pause()
    setcurrentlyPlaying(emptyItem)
  }
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader setcurrentlyPlaying={stopRadio} />
        <RadioList
          currentlyPlaying={currentlyPlaying}
          setcurrentlyPlaying={playRadio}
        />
        <ListFooter currentlyPlaying={currentlyPlaying} />
        <audio src="http://s2.cdnradio.ru/ru-mp3-128" id="audioPlayer" ></audio>
      </div>
    </div>
  );
}

export default App;
