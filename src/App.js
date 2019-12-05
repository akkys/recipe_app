import React from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "e8ca15d6d399ee9739ce380ab9cdae35";

class App extends React.Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  componentDidMount() {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    // const { recipes } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h3>Recipe Search</h3>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
