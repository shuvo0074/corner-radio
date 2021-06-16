import './radioDetails.css';
import minusBtn from '../../assets/icons/minus.png'
import plusBtn from '../../assets/icons/plus.png'

function RadioDetails() {
  return (
    <div className="detailsContainer">
      <img
        src={minusBtn}
        className="itemBtn cursor-pointer"
      />
      <img
        src={"https://picsum.photos/200"}
        className="coverImg"
      />
      <img
        src={plusBtn}
        className="itemBtn cursor-pointer"
      />
      
    </div>
  );
}

export default RadioDetails;
