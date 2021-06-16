import RadioDetails from "../RadioDetails/radioDetails";
import "./listItem.css";

function ListItem({ item, onClick, isExpanded }) {
  return (
    <div>
      <div className="item-Container" onClick={onClick}>
        <p className="fs-25 fw-400 greyText">{item.title}</p>
        <p className="fs-22 fw-bold greyText">{item.userCount}</p>
      </div>
      {isExpanded ? <RadioDetails /> : null}
    </div>
  );
}

export default ListItem;
