import ListItem from "../ListItem/listItem";
import "./radioList.css";
import { radioList } from "../../const/radioList";
import { useEffect, useState } from "react";

function RadioList({ currentlyPlaying, setcurrentlyPlaying }) {
  const [ items, setItems] = useState([])
  useEffect(()=>{
    // do API request here
    setItems(radioList)
  },[])
  return (
    <div className="list-Container">
      {items.map((item, index) => (
        <ListItem key={index} onClick={()=>setcurrentlyPlaying(item)} isExpanded={index === currentlyPlaying.id} item={item} />
      ))}
    </div>
  );
}

export default RadioList;
