import React from "react";
import { TagsList } from "../TagList/TagList";
import { TagAdder } from "../TagAdder/tagAdder";

export default function Recipe(props) {

    return (
        <div className = "Recipe">
            <h2><a href={props.recipe.URL}>{props.recipe.Title}</a></h2>
            <TagAdder addTag={props.addTag} recipeID={props.recipe.id} isFirstTag={props.recipe.Tags ? false : true}/>
            {props.recipe.Tags ? <TagsList tags = {props.recipe.Tags} RecipeID={props.recipe.id} removeTag={props.removeTag}/> : ""}
        </div>
    )
}