import React from "react";

export function RecipeTimes({ prepTime, cookTime, totalTime }) {
    return (
        <div className="ui segment">
            <div className="">
                <label>
                    {" "}
                    Prep Time:
                    <div>{prepTime}</div>
                </label>
            </div>
            <div className="">
                <label className="column">
                    {" "}
                    Cook Time:
                    <div className="column">{cookTime}</div>
                </label>
            </div>
            <div className="">
                <label>
                    {" "}
                    Total Time:
                    <div>{totalTime}</div>
                </label>
            </div>
        </div>
    );
}
