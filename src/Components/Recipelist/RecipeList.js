import React from "react";
import './RecipeList.css'
import Recipe from "../Recipe/Recipe";


export default function RecipeList (props) {

    return (
        <div className = "RecipeList">
                {props.recipes.length > 0 ? (
                    props.recipes.map(recipe => <Recipe key = {recipe.id} recipe={recipe} addTag={props.addTag} removeTag={props.removeTag}/>)
                    ) : (
                        <div>
                        <p>Log in to see recipes</p>
                        </div>
                    )}
            </div>
    )

}