import React from "react";

export function RecipeAuthor({ authorName }) {
    return (
        <div className="author-info ui card">
            <img className="image" alt="Author Profile"></img>
            <div className="header">{authorName}</div>
            <a>Link to Recipe Website</a>
        </div>
    );
}
