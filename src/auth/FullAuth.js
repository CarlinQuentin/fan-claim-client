import React, {Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './AllCss/fullauth.css'
import ViewIndex from '../Views/ViewIndex';
import PostIndex from '../Posts/PostIndex';

class FullAuth extends Component{

    constructor(props){
        super(props);
            this.state = {

            }
        }
    render(){
        return(
            <div>
                <div>
                    <Link to='/viewindex'><button className='b-2'>View Items</button></Link>
                    <Link to='/postindex'><button className='b-2'>Post Item</button></Link>
                <button className='b' onClick={this.props.logout}>Log Out</button>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/viewindex'><ViewIndex token={this.props.token}/></Route>
                        <Route exact path='/postindex'><PostIndex /></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default FullAuth;