import React from 'react';
import { Image, Card } from 'semantic-ui-react'

function RecipeCard({props}) {

  return (
    <Card>
      <Image wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
          <Image src={props.image.url} />
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.author.name}
      </Card.Content>
    </Card>
  )
}


export default RecipeCard;