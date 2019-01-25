import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './WelcomePage.scss'
import Login from './Login/Login.jsx'
class WelcomePage extends Component {
    render () {
        return (
            <div className={"WelcomePage"}>
                <Paper className={"loginPaper"}>
                    <Login/>
                </Paper>
            </div>
        )
    }
}

export default WelcomePage