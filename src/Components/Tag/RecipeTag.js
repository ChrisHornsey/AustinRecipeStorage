import React from "react";



export function RecipeTag (props) {


    return (
        <span className="Tag">
            <span className="tagText">{props.tagText}</span>
            <div className="addRemove">X</div>
        </span>
    )
}