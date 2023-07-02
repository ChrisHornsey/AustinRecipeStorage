import React from "react";



export function TextSearch(props) {

function handleStringChange(e) {
    props.setSearchString(e.target.value)
}

    return(
        <input placeholder="Search by name" onChange={handleStringChange} value={props.searchString}/>
    )
}