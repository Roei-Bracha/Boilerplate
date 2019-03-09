import './AppNavBar.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Login from './Login/Login'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { store } from '../../store/configureStore';

type Props = StateProps // & DispatchProps & OwnProps 

function AppNavBar(props:Props){
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

interface StateProps {
    userId: string | null
}

const mapStateToProps = (state:store) : StateProps => ({
    userId:state.main.userId
})

export default connect(mapStateToProps)(AppNavBar)
