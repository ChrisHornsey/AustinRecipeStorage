import React from "react";
import { TagsList } from "../TagList/TagList";

export default function Recipe({recipe}) {
    const {Title, URL, Tags}= recipe;

    return (
        <div className = "Recipe">
            <h2><a href={URL}>{Title}</a></h2>
            {recipe.Tags ? <TagsList tags = {recipe.Tags}/> : ""}
        </div>
    )
}