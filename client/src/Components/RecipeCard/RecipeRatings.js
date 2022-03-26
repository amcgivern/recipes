import React from 'react';




export function RecipeRatings({ aggregateRating }) {
    return (
        <div className="ui segment">
            <h3>Ratings</h3>
            <div className="taste-rating">Aggregate: {aggregateRating}</div>
            <div className="taste-rating">Taste: *****</div>
            <div className="ease-rating">Ease: *****</div>
            <div className="speed-rating">Speed: *****</div>
        </div>
    );
}
