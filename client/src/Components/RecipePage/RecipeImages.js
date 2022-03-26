import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export function RecipeImages({ imageList = [] }) {
    return (
        <div className="recipe-img-carousel">
            <Carousel>
                {imageList.map((image) => (
                    <div>
                        <img className="recipeImg" src={image} />
                        <p className="legend">Legend 1</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
