import ListItem from "../ListItem/listItem";
import "./radioList.css";
import { radioList } from "../../const/radioList";

function RadioList({ item }) {
  return (
    <div className="list-Container">
      {radioList.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
}

export default RadioList;
