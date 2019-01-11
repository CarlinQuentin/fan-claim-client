import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from './AuthContext';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    handelSubmit = (e) => {
        fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type' : 'application/json' 
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        e.preventDefault();
        }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <h4>Already have an account?</h4>
                    <Form onSubmit={this.handelSubmit} className='form'>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input id='li_email' type='email' name='email' placeholder='Enter Email' onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input id='li_password' type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} />
                        </FormGroup>
                        <Button type='submit' className='button'>Submit</Button>
                    </Form>
            </div>
        )
    }
}
export default props => (
    <AuthContext.Consumer>
    {auth => <Login {...props} auth={auth} />}
    </AuthContext.Consumer>
);