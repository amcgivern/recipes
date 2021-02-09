import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image} from 'semantic-ui-react'
import RecipeCard from './RecipeCard.js'

class RecipeGrid extends React.Component{
    constructor(props) {
      super(props);
      this.state = { recipes: [], };
      this.get_recipe_data = this.get_recipe_data.bind(this);
      this.get_recipe_data();
    }
    get_recipe_data(){
        fetch('http://localhost:3001/recipes').then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
            response.json().then(data => {
                console.log(data.recipes, response.status);
                this.setState(state => ({
                    recipes: data.recipes,
                }))
            });
        })
    }

    render(){
        let recipeList = [];
        for (const [index, value] of this.state.recipes.entries()) {
            recipeList.push(
                <RecipeCard key={index} props={value}>
                </RecipeCard>)
        }
      return (<div>
          <Grid columns='three' divided>
          {recipeList}
            <Grid.Row>
            <Grid.Column>

            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            </Grid.Row>
        </Grid>

          This is the Recipe list
      </div>)
    }
  }
  
  export default RecipeGrid;