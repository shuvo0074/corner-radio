import './listHeader.css';
import backBtn from '../../assets/icons/back-arrow.png'
import switchBtn from '../../assets/icons/switch.png'

function ListHeader({setcurrentlyPlaying}) {
  return (
    <div className="listHeader">
      <img
        src={backBtn}
        className="headerBtnBack cursor-pointer"
        alt="back"
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
        onClick={()=>setcurrentlyPlaying()}
        alt="stop"
      />
    </div>
  );
}

export default ListHeader;
