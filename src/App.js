import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";
import AnimLab from "./components/AnimLab/AnimLab";

export default class App extends React.Component {
  state = {
    pages: [<RecipeSearch />, <AnimLab />],
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
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
}
