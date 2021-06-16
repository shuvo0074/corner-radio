import "./listItem.css";

function ListItem({item}) {
  return (
    <div className="item-Container">
      <h1>{item.title}</h1>
      <h1>{item.userCount}</h1>
    </div>
  );
}

export default ListItem;
