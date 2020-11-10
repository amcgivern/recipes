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

      this.state = { num_clicks: 0 };
      this.click_server = this.click_server.bind(this);
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


    render(){
        const ingredients = ['one', 'two', 'three'];
        const instructions = ['First Step','Second Step','Third Step','Fourth Step','Fifth Step'];

        const ingredientList = [];
        const instructionList = [];

        for (const [index, value] of ingredients.entries()) {
            ingredientList.push(
            <label>
                <input key={index} type="checkbox"></input>
                {value}
            </label>)
          }

          for (const [index, value] of instructions.entries()) {
            instructionList.push(<li key={index}>{value}</li>)
          }

      return (
      <div class="recipe-card">
        <div class="col-sm-12">
            <h2>Recipe Name</h2>
        </div>   
        <div class="row">
            <button onClick={this.click_server}>
                Clicks: {this.state.num_clicks}
            </button>

            <div class="col-sm-9">
                <div class="recipe-img-carousel">
                    <Carousel >
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    </Carousel>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="author-info">
                        <img alt="Author Profile"></img>
                        <div>Author's name</div>
                        <a>Link to Recipe Website</a>
                </div>
                <div>
                    <h3>Ratings</h3>
                    <div class="taste-rating">Taste: *****</div>
                    <div class="ease-rating">Ease: *****</div>
                    <div class="speed-rating">Speed: *****</div>
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
                  This is a recipe
      </div>)
    }
  }
  
  export default Recipe;