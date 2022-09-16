import React from "react";
import "./App.css";
import RecipeSearch from "./components/RecipeSearch";

export default class App extends React.Component {
  state = {
    pages: [<RecipeSearch />],
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
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
}
