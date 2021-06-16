import ListItem from "../ListItem/listItem";
import "./radioList.css";
import { radioList } from "../../const/radioList";

function RadioList({ currentlyPlaying, setcurrentlyPlaying }) {
  return (
    <div className="list-Container">
      {radioList.map((item, index) => (
        <ListItem key={index} onClick={()=>setcurrentlyPlaying(item)} isExpanded={index == currentlyPlaying.id} item={item} />
      ))}
    </div>
  );
}

export default RadioList;
