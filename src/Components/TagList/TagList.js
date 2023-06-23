import React from "react";
import { RecipeTag } from "../Tag/RecipeTag";

export function TagsList(props) {


    return (
        <div>
            {props.tags.map(tag => <RecipeTag tagText={tag} RecipeID={props.RecipeID} removeTag={props.removeTag}/>)}            
        </div>
    )
}