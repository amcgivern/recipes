import React, { Component } from 'react';
import { Image, Card, Icon } from 'semantic-ui-react'

class RecipeCard extends React.Component{
    constructor(props) {
      super(props);
    }

    render(){
        console.log(this.props, this.props.props.id);
      return (
                <Card>
                    <Image wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.props.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'></span>
                    </Card.Meta>
                    <Card.Description>
                        <Image src={this.props.props.image.url} />
                        {this.props.props.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {this.props.props.author.name}
                    </Card.Content>
                </Card>
      )
    }
  }
  
  export default RecipeCard;