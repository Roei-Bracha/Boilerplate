import React, { Component, PropTypes } from 'react'
import "./NavBar.scss";
import Login from './Login/Login';
class NavBar extends Component {
    render () {
        return (
            <nav className="NavBar">
                <div className="leftDiv">LOGO HERE</div>
                <div className="MiddleDiv"> SEARCH HERE</div>
                <div className="RightDiv">
                    <Login/>
                </div>
            </nav>
        )
    }
}

NavBar.propTypes = {

}

export default NavBar