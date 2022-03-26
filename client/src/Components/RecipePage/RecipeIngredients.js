import React from 'react';

export function RecipeIngredients({ ingredientList = [] }) {
    return (
        <fieldset className="ingredient-list">
            <h2>Ingredients</h2>
            <ul>
                {ingredientList.map((ingredient) => (
                    <li>
                        <label key={ingredient}>
                            <input className="item" type="checkbox"></input>
                            {ingredient}
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
    );
}
