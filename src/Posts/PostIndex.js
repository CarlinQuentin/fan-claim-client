import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AuthContext} from '../auth/AuthContext';
import './post.css';

class PostIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return(
            <div className='c'>This is the post index page</div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
    {auth => <PostIndex {...props} auth={auth} />}
    </AuthContext.Consumer>
)
