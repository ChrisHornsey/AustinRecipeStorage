import React from "react";
import './SearchBox.css';
import { TagDropDown } from "../TagDropDown/TagDropDown";
import { TextSearch } from "../TextSearch/TextSerch";
import { RandomRecipe } from "../RandomRecipe/RandomRecipe";

export function SearchBox(props) {

    return (
        <div className="SearchBox">
            <div>
            <TextSearch searchString={props.searchString} setSearchString={props.setSearchString}/>
            </div>
            <div>
                <RandomRecipe selectRandomRecipe={props.selectRandomRecipe}/>
            </div>
            <div>
            <TagDropDown selectedTag={props.selectedTag} setSelectedTag={props.setSelectedTag} allTags={props.allTags}/>
            </div>
        </div>
    )
}