import React from 'react';




export function RecipeInstructions({ instructionList = [] }) {
    return (
        <div className="recipe-intructions eight wide column ui segment">
            <h2>Instructions</h2>
            <ul>
                {instructionList.map((instruction) => (
                    <li className="item" key={instruction.text}>
                        {instruction.text}
                    </li>
                ))}
            </ul>
        </div>);
}
