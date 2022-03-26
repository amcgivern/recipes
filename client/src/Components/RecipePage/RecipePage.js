import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeAuthor } from './RecipeAuthor';
import { RecipeImages } from './RecipeImages';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeInstructions } from './RecipeInstructions';
import { RecipeRatings } from './RecipeRatings';
import { RecipeTimes } from './RecipeTimes';

export function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    const getRecipeData = useCallback((id) => {
        fetch('http://localhost:3001/recipes/' + id).then((response) => {
            // tODO env var
            if (response.status !== 200) {
                console.log(
                    'Looks like there was a problem. Status Code: ' +
                        response.status
                );
                return;
            }

            // Examine the text in the response
            response.json().then((data) => {
                console.log(data, response.status);
                setRecipe(data);
            });
        });
    }, []);

    useEffect(() => {
        getRecipeData(id);
    }, [getRecipeData, id]);

    let ingredients = [];

    if (recipe?.ingredients !== undefined) {
        ingredients = recipe.ingredients;
    }
    if (recipe?.recipeIngredient !== undefined) {
        ingredients = recipe.recipeIngredient;
    }

    // Image could be an object or an array so convert to array if needed
    let imageList = [];
    if (Array.isArray(recipe?.image)) {
        imageList = recipe.image;
    } else if (recipe?.image) {
        imageList = [recipe?.image];
    }

    return (
        <div className="recipe-card ui grid">
            <div className="col-sm-12">
                <h2>{recipe?.name}</h2>
            </div>
            <div className="row ui horizontal segments">
                <div className="column nine wide ui segment">
                    <RecipeImages imageList={imageList} />
                </div>
                <div className="column three wide ui segment">
                    <RecipeAuthor authorName={recipe?.author?.name} />
                    <RecipeRatings
                        aggregateRating={recipe?.aggregateRating?.ratingValue}
                    />
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
        </div>
    );
}
