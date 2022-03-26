import React from "react";
import { Image, Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export function RecipeCard({ recipe }) {
    const history = useHistory();

    function handleClick() {
        history.push(`/recipe/${recipe.id}`);
    }

    return (
        <Card>
            <Image wrapped ui={false} />
            <Card.Content onClick={handleClick}>
                <Card.Header>{recipe?.name}</Card.Header>
                <Card.Meta>
                    <span className="date"></span>
                </Card.Meta>
                <Card.Description>
                    <Image src={recipe?.image?.url} />
                    {recipe?.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>{recipe?.author?.name}</Card.Content>
        </Card>
    );
}
