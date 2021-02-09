import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class RecipeGrid extends React.Component{
    constructor(props) {
      super(props);

    }
    get_recipe_data(id){
        fetch('http://localhost:3001/recipes').then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
            response.json().then(data => {
                console.log(data, response.status);
                this.setState(state => ({
                    recipes: data,
                }))
            });
        })
    }

    render(){
      return (<div>
          <Grid columns='three' divided>
            <Grid.Row>
            <Grid.Column>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
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