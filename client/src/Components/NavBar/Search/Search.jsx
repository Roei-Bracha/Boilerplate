import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Search.scss';
class Search extends Component {
    render () {
        return (
        <div className={"SearchClass"}>
            <div className={"searchIcon"}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
            />
        </div>
        )
    }
}

export default Search