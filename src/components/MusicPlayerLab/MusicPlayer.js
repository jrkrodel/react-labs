import { useState, useEffect } from "react";
import MusicList from "./MusicList";
import PlayWidget from "./PlayWidget";
import MusicVis from "./MusicVis";
export default function MusicPlayer() {
  const [tracks, setTracks] = useState([]);
  const [currPlaying, setCurrPlayering] = useState({});
  const [currProgress, setCurrProgress] = useState(0);

  useEffect(() => {
    fetch("data/music.json")
      .then((response) => response.json())
      .then((data) => {
        setTracks(data);
      });
  }, []);

  function trackSelected(id) {
    const foundTrack = tracks.find((track) => track.id === id);
    setCurrPlayering(foundTrack);
  }

  return (
    <div className="container">
      <h1>Music Player</h1>
      <div>Now Playing: {currPlaying.title}</div>
      <MusicList
        tracks={tracks}
        onSelected={(id) => {
          trackSelected(id);
        }}
        currPlaying={currPlaying}
      />
      <PlayWidget
        currentTrack={currPlaying}
        setCurrProgress={setCurrProgress}
      />
      <MusicVis size={50} progress={currProgress} />
    </div>
  );
}
