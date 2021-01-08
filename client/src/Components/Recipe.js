import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';


class Recipe extends React.Component{
    constructor(props) {
      super(props);

      this.state = { num_clicks: 0,
                    recipe: {}, };
      this.click_server = this.click_server.bind(this);
      this.get_recipe_data = this.get_recipe_data.bind(this);

      this.get_recipe_data(1);
      console.log(this.state.recipe);
    }

    click_server() {
        fetch('http://localhost:3001/clicks').then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
            response.json().then(data => {
                this.setState(state => ({
                    num_clicks: data.num_clicks,
                }))
            });
        })
    }

    get_recipe_data(id){
        fetch('http://localhost:3001/recipes/' + id).then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
            response.json().then(data => {
                console.log(data, response.status);
                this.setState(state => ({
                    recipe: data,
                }))
            //  this.state.recipe = data;
            });
        })
    }
    render(){
        let ingredients = ['one', 'two', 'three'];
        let instructions = ['First Step','Second Step','Third Step','Fourth Step','Fifth Step'];
        let authorName = "author here";
        let aggregateRating = "agg rating";
        let recipeDescription = "this is a recipe";
        let recipeName = "RECIPE NAME";
        let servings = "num servings";
        let prepTime = "preptime";
        let cookTime = "cooktime";
        let totalTime = "totaltime";
        const ingredientList = [];
        const instructionList = [];
        const imageList = [];

        if (this.state.recipe != undefined){
            if (this.state.recipe.ingredients != undefined){
                ingredients = this.state.recipe.ingredients;
            }
            if (this.state.recipe.recipeIngredient != undefined){
                ingredients = this.state.recipe.recipeIngredient;
            }
            if (this.state.recipe.recipeInstructions != undefined){
                instructions = this.state.recipe.recipeInstructions;
            }
            recipeDescription = this.state.recipe.description;
            recipeName = this.state.recipe.name;
            servings = this.state.recipe.recipeYield;
            cookTime = this.state.recipe.cookTime;
            prepTime = this.state.recipe.prepTime;
            totalTime = this.state.recipe.totalTime;

            for (const [index, value] of ingredients.entries()) {
                ingredientList.push(
                <label key={index}>
                    <input key={index} type="checkbox"></input>
                    {value}
                </label>)
            }

            for (const [index, value] of instructions.entries()) {
                instructionList.push(<li key={index}>{value.text}</li>)
            }
            if (this.state.recipe.image){
                for (const [index, value] of this.state.recipe.image.entries()) {
                        imageList.push(<div>
                                            <img className="recipeImg" src={value} />
                                            <p className="legend">Legend 1</p>
                                        </div>);
                }
            }
            if (this.state.recipe.author && this.state.recipe.author.name){
                authorName = this.state.recipe.author.name;
            }
            if (this.state.recipe.aggregateRating && this.state.recipe.aggregateRating.ratingValue){
                aggregateRating = this.state.recipe.aggregateRating.ratingValue;
            }
        }

      return (
      <div class="recipe-card">
        <div class="col-sm-12">
            <h2>{recipeName}</h2>
        </div>   
        <div class="row">
            <div class="col-sm-9">
                <div class="recipe-img-carousel">
                    <Carousel >
                        {imageList}
                    </Carousel>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="author-info">
                        <img alt="Author Profile"></img>
                        <div>{authorName}</div>
                        <a>Link to Recipe Website</a>
                </div>
                <div>
                    <h3>Ratings</h3>
                    <div class="taste-rating">Aggregate: {aggregateRating}</div>
                    <div class="taste-rating">Taste: *****</div>
                    <div class="ease-rating">Ease: *****</div>
                    <div class="speed-rating">Speed: *****</div>
                </div>
                <div>
                    <label> Prep time:
                        <div>{prepTime}</div>
                    </label>
                    <label> cookTime time:
                        <div>{cookTime}</div>
                    </label>
                    <label> Total time:
                        <div>{totalTime}</div>
                    </label>
                </div>
            </div>
        </div> 
        <div class="row">
            <div class="col-sm-4">
                <fieldset class="ingredient-list">
                <h2>Ingredients</h2>                
                {ingredientList}
                </fieldset>
            </div>
            <div class="recipe-intructions col-sm-8">
                <h2>Instructions</h2> 
                <ul>
                    {instructionList}
                </ul>
            </div>
        </div>
            {recipeDescription}
      </div>)
    }
  }
  
  export default Recipe;