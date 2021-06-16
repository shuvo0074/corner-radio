import './radioDetails.css';
import minusBtn from '../../assets/icons/minus.png'
import plusBtn from '../../assets/icons/plus.png'

function RadioDetails() {
  return (
    <div className="detailsContainer">
      <img
        src={minusBtn}
        className="itemBtn cursor-pointer"
        alt="reduce"
      />
      <img
        src={"https://picsum.photos/200"}
        className="coverImg"
        alt="cover"
      />
      <img
        src={plusBtn}
        className="itemBtn cursor-pointer"
        alt="increase"
      />
      
    </div>
  );
}

export default RadioDetails;
