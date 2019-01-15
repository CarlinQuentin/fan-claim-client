import React from 'react';
import { Container, } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return(
        <Container className='auth-container'>
            <div>
                <div>
                    <Signup setToken={props.setToken} />
                </div>
                <div className='login-col'>
                    <Login setToken={props.setToken} />
                </div>
            </div>
        </Container>
     )
}
export default Auth;