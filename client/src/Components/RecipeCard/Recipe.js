import React, { useCallback, useEffect, useState } from 'react';
import { RecipeAuthor } from './RecipeAuthor';
import { RecipeImages } from './RecipeImages';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeInstructions } from './RecipeInstructions';
import { RecipeRatings } from './RecipeRatings';
import { RecipeTimes } from './RecipeTimes';


export function Recipe() {
    const [recipe, setRecipe] = useState({});

    const getRecipeData = useCallback((id) => {
        fetch('http://localhost:3001/recipes/' + id).then(response => { // tODO env var
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(data => {
                console.log(data, response.status);
                setRecipe({
                    recipe: data,
                });
            });
        })
    }, []);

    useEffect(() => {
        getRecipeData(1);
    }, [getRecipeData]);

    let ingredients = ['one', 'two', 'three'];
    const ingredientList = [];
    const imageList = [];

    if (recipe !== undefined) {
        if (recipe.ingredients !== undefined) {
            ingredients = recipe.ingredients;
        }
        if (recipe.recipeIngredient !== undefined) {
            ingredients = recipe.recipeIngredient;
        }
    }

    return (
        <div className="recipe-card ui grid">
            <div className="col-sm-12">
                <h2>{recipe?.name}</h2>
            </div>
            <div className="row ui horizontal segments">
                <div className="column nine wide ui segment">
                    <RecipeImages imageList={recipe.image} />
                </div>
                <div className="column three wide ui segment">
                    <RecipeAuthor authorName={recipe?.author?.name} />
                    <RecipeRatings aggregateRating={recipe?.aggregateRating?.ratingValue} />
                    <RecipeTimes
                        prepTime={recipe?.prepTime}
                        cookTime={recipe?.cookTime}
                        totalTime={recipe?.totalTime}
                />
                </div>
            </div>
            <div className="row ui horizontal segments">
                <div className="four wide column ui segment">
                    <RecipeIngredients ingredientList={ingredients} />
                </div>
                <RecipeInstructions instructionList={recipe?.instructions} />
            </div>
            {recipe?.description}
        </div>)
}
