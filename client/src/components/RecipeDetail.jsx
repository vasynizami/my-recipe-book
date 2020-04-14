import React, { Component } from "react";
import "./RecipeDetail.css";
import Layout from "./shared/Layout";
import { getRecipe, deleteRecipe } from "../services/recipe";
import { Link } from "react-router-dom";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "",
        img: "",
        ingredients: "",
        instructions: "",
      },
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const recipe = await getRecipe(id);
    this.setState({ recipe });
  }

  render() {
    const { recipe } = this.state;
    return (
      <Layout user={this.props.user}>
        <div className="recipe-detail">
          <div className="detail">
            <div className="name">{recipe.name}</div>
            <img className="img" src={recipe.img} />
            <div className="img">{recipe.course}</div>
            <div className="img">{recipe.difficulty}</div>
            <div className="img">{recipe.cuisine}</div>
            <div className="img">{recipe.preptime}</div>
            <div className="img">{recipe.cooktime}</div>
            <div className="img">{recipe.serves}</div>
            <div className="img">{recipe.ingredients}</div>
            <div className="img">{recipe.instructions}</div>

            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/recipes/${recipe._id}/edit`}>
                  Edit
                </Link>
              </button>
              <button
                className="delete-button"
                onClick={() => deleteRecipe(recipe._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RecipeDetail;
