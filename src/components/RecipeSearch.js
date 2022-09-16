import React from "react";
import "../App.css";

export default class RecipeSearch extends React.Component {
  state = {
    recipes: [
      "Apple Pie",
      "Cherry Pie",
      "Pizza Pie",
      "Hamburger",
      "Ham steak",
      "Chocolate Mousse",
      "Chocolate Ice Cream",
    ],
    searchTerm: "",
  };

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    //find matching recipes
    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return recipe
        .toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());
    });

    let recipeList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>;
    });

    return (
      <div className="App">
        <h2>Recipe Search</h2>

        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.updateSearch(event);
          }}
        />
        <div className="recipe-container">
          <ul>{recipeList}</ul>
        </div>
      </div>
    );
  }
}
