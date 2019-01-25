import React, { Component, PropTypes } from 'react'
import "./NavBar.scss";
import AppBar from '@material-ui/core/AppBar'
import Toolbar  from '@material-ui/core/Toolbar';
import Search from './Search/Search';
class NavBar extends Component {
    render () {
        return (
            <div>
                <AppBar position="fixed" className="NavBar">
                    <Toolbar className="NavBar-Toolbar">
                    <div className="leftDiv">LOGO HERE</div>
                    <div className="MiddleDiv"> <Search/></div>
                    <div className="RightDiv">
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

NavBar.propTypes = {

}

export default NavBar