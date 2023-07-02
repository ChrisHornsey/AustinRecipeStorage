import React from "react";

export function TagDropDown(props) {

    return (
    <select value = {props.selectedTag} onChange={e => props.setSelectedTag(e.target.value)}>
                 {props.allTags.length > 0 ? <option value="">All Recipes</option> : ""}
                 {props.allTags.length > 0 ? props.allTags.map( Tag => <option value={Tag}>{Tag}</option>) : <option value="">Log in first!</option>}
            </select>
    )
}