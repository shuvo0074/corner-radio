import "./listItem.css";

function ListItem({item}) {
  return (
    <div className="item-Container">
      <p
        className="fs-25 fw-400"
      >{item.title}</p>
      <p
        className="fs-22 fw-bold"
      >{item.userCount}</p>
    </div>
  );
}

export default ListItem;
