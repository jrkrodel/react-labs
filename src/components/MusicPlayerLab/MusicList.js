import "./music.css";

export default function MusicList(props) {
  let trackEls = props.tracks.map((track) => {
    return (
      <div
        className={props.currPlaying.id === track.id ? "active" : ""}
        onClick={() => {
          props.onSelected(track.id);
        }}
        key={track.id}
      >
        {track.title}
      </div>
    );
  });
  return <div className="musicList">{trackEls}</div>;
}
