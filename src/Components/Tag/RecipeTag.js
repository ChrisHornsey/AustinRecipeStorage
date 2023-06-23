import React from "react";



export function RecipeTag (props) {

    function handleClick() {
        props.removeTag(props.RecipeID, props.tagText)
    }


    return (
        <span className="Tag">
            <span className="tagText">{props.tagText}</span>
            <div className="addRemove" onClick={handleClick}>X</div>
        </span>
    )
}