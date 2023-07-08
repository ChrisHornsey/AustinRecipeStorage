import React from "react";
import './RecipeList.css'
import Recipe from "../Recipe/Recipe";
import background from "../../Images/bakednesca.jpg"


export default function RecipeList (props) {

    const colours = ["lightblue", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink", "lightsalmon", "lightsteelblue", "lightyellow", "lightskyblue", "mistyrose", "palegreen", "peachpuff", "lavender", "beige", "lavenderblush"]

    function randomColor() {
        const randomNumber = Math.floor(Math.random()*colours.length)

        return colours[randomNumber]
    }

    return (
        <div className = "RecipeList" style={{ backgroundImage: `url(${background})`}}>
                {props.recipes.length > 0 ? (
                    props.recipes.map(recipe => <Recipe key = {recipe.id} recipe={recipe} addTag={props.addTag} removeTag={props.removeTag} bgColor={randomColor()}/>)
                    ) : (
                        <div>
                        <p>Log in to see recipes</p>
                        </div>
                    )}
            </div>
    )

}