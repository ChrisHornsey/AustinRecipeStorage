import React from "react";
import { useState } from "react";

export function TagAdder(props) {
    const [tagName, setTagName] = useState("");

    function tagChange(e) {
        setTagName(e.target.value)
    }

    function handleClick() {
        console.log(`submitting new tag with name ${tagName}`)
        props.addTag(tagName, props.recipeID, props.isFirstTag)
        setTagName("")
    }

    return (
        <div className="tagAdder">
            <input onChange={tagChange} placeholder="Tag name" value={tagName}/>
            <button onClick={handleClick}>add tag</button>
        </div>
    )
}