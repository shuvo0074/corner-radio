import './listHeader.css';
import backBtn from '../../assets/icons/back-arrow.png'
import switchBtn from '../../assets/icons/switch.png'

function ListHeader() {
  return (
    <div className="listHeader">
      <img
        src={backBtn}
        className="headerBtnBack cursor-pointer"
      />
      <div
        className="headerTitleContainer"
      >
        <h2
        className="headerTitle"
        >STATIONS</h2>
      </div>
      <img
        src={switchBtn}
        className="headerBtnSwitch cursor-pointer"
      />
    </div>
  );
}

export default ListHeader;