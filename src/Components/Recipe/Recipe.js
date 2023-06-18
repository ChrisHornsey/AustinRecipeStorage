import React from "react";

export default function Recipe({recipe}) {
    const {Title, URL, Tags}= recipe;

    return (
        <div className = "Recipe">
            <h2><a href={URL}>{Title}</a></h2>
        </div>
    )
}