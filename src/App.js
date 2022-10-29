import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";
import AnimLab from "./components/AnimLab/AnimLab";
import MapDataLab from "./components/MapDataLab/MapDataLab";
import BagLab from "./components/BagLab/BagLab";
import MusicPlayer from "./components/MusicPlayerLab/MusicPlayer";

export default class App extends React.Component {
  state = {
    pages: [
      <RecipeSearch />,
      <AnimLab />,
      <MapDataLab />,
      <BagLab />,
      <MusicPlayer />,
    ],
    curPage: null,
  };

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }

  render() {
    return (
      <div className="App">
        <h1>React Labs</h1>
        <div>
          <button onClick={() => this.swapProject(0)}>Recipe Search</button>
          <button onClick={() => this.swapProject(1)}>Animation Lab</button>
          <button onClick={() => this.swapProject(2)}>Map Data Lab</button>
          <button onClick={() => this.swapProject(3)}>Bag Lab</button>
          <button onClick={() => this.swapProject(4)}>Music Player Lab</button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
}
