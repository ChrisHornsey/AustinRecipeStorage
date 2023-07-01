import React from "react";

export function SearchBox(props) {

    return (
        <span className="SearchBox">
            <select value = {props.selectedTag} onChange={e => props.setSelectedTag(e.target.value)}>
                <option value="">All Recipes</option>
                 {props.allTags.length > 0 ? props.allTags.map( Tag => <option value={Tag}>{Tag}</option>) : <option value="">Log in first!</option>}
            </select>
        </span>
    )
}