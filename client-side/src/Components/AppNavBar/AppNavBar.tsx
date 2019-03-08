import './AppNavBar.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Login from './Login/Login'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'

function AppNavBar(props){
    return (
        <AppBar className={"AppNavBar"}>
            <Toolbar className={"Toolbar"}>
                <Typography variant="h6" color="inherit">
                AppName
                </Typography>
                {props.userId ? <UserAvatar/> : <Login/>}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => ({
    userId:state.main.userId
})
const mapDispathcToProps ={
}

export default connect(mapStateToProps)(AppNavBar)

AppNavBar.propTypes = {

}