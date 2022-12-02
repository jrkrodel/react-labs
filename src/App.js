import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";
import AnimLab from "./components/AnimLab/AnimLab";
import MapDataLab from "./components/MapDataLab/MapDataLab";
import BagLab from "./components/BagLab/BagLab";
import MusicPlayer from "./components/MusicPlayerLab/MusicPlayer";
import FakeKanban from "./components/dataStoreLab/FakeKanban";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ThreeFiberLab from "./components/ThreeFiberLab/ThreeFiberLab";
import ApiLab from "./components/ApiLab/ApiLab";
export default class App extends React.Component {
  state = {
    pages: [
      <RecipeSearch />,
      <AnimLab />,
      <MapDataLab />,
      <BagLab />,
      <MusicPlayer />,
      <FakeKanban />,
      <ThreeFiberLab />,
      <ApiLab />,
    ],
    curPage: null,
  };

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex });
  }

  render() {
    return (
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <h1>React Labs</h1>
          <div className="nav-bar">
            <button onClick={() => this.swapProject(0)}>Recipe Search</button>
            <button onClick={() => this.swapProject(1)}>Animation Lab</button>
            <button onClick={() => this.swapProject(2)}>Map Data Lab</button>
            <button onClick={() => this.swapProject(3)}>Bag Lab</button>
            <button onClick={() => this.swapProject(4)}>
              Music Player Lab
            </button>
            <button onClick={() => this.swapProject(5)}>Data Store Lab</button>
            <button onClick={() => this.swapProject(6)}>Three Fiber Lab</button>
            <button onClick={() => this.swapProject(7)}>Api Lab</button>
          </div>
          {this.state.pages[this.state.curPage]}
        </DndProvider>
      </div>
    );
  }
}
