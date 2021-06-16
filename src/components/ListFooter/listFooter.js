import "./listFooter.css";
function ListFooter({ currentlyPlaying }) {
  return (
    <div className="listFooter">
      {currentlyPlaying ? (
        <div>
          <p className="fs-14 fw-bold currentlyPlayingTxt">Currently Playing</p>
          <p className="fs-25 fw-400 currentlyPlayingTitle greyText">{currentlyPlaying.title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ListFooter;
