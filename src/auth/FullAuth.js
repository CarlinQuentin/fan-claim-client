import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


class FullAuth extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                This is the Full Auth page!
                <button onClick={this.props.logOut}>Log Out</button>
            </div>
        )
    }
}

export default FullAuth;