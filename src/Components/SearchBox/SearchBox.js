import React from "react";

export function SearchBox(props) {

    return (
        <div>
            <select onClick={props.refreshTags}>
                 {props.allTags.length > 0 ? props.allTags.map( Tag => <option value={Tag}>{Tag}</option>) : <option>Log in first!</option>}
            </select>
        </div>
    )
}