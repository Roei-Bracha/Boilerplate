import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            register:false
        }
    }
    render () {
        return (
            <div>
                Login form
            </div>
        )
    }
}

export default Login