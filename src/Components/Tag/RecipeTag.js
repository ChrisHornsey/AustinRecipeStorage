import React from "react";
import { useState } from "react";


export function RecipeTag (props) {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!expanded)
    }

    return (
        <span className="Tag">
            {expanded ? <span className="tagText">{props.tagText}</span> : ""}
            <div className="addRemove" onClick={handleClick}>{props.adding ? "+" : "x"}</div>
        </span>
    )
}