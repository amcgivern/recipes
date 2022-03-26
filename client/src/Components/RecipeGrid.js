import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Image } from 'semantic-ui-react';
import { RecipeCard } from './RecipeCard.js';

export function RecipeGrid() {
    const [recipes, setRecipes] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getRecipeData = async () => {
            const response = await fetch('http://localhost:3001/recipes');
            if (response.status !== 200) {
                console.log(
                    'Looks like there was a problem. Status Code: ' +
                        response.status
                );
                return;
            }

            // Examine the text in the response
            let data = await response.json();
            console.log(data.recipes, response.status);
            setRecipes(data.recipes);
        };
        getRecipeData();
    }, []);

    function addRecipe() {
        history.push('/recipe/new');
    }

    return (
        <div>
            <Button onClick={addRecipe}>Add Recipe</Button>
            <Grid columns="three" divided>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
                <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            This is the Recipe list
        </div>
    );
}

export default RecipeGrid;
