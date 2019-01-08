import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { AuthContext } from './AuthContext';


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            password2: '',
        } ;
    }

    check = (e) => {
        e.preventDefault()
        if(this.state.password !== this.state.password2){
            alert('Passwords do not match')
        } else {
            this.handleStuff();
        }
    }

    
    handleStuff = (e) => {
        // e.preventDefault()
        if(this.state.password.length < 6 ) {
            alert('Password must be at least 6 digits')
        } else if (this.state.firstName === ''){
            alert('Name cannot be blank')
        } else if(this.state.lastName === ''){
            alert('Last Name cannot be blank')
        } else if(this.state.userName === ''){
            alert('User Name cannot be blank')
        } else if (this.state.email === ''){
            alert ('Email cannot be blank')
        } else{
            this.handleSubmmit()
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmmit = (e) => {
        fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.auth.setToken(data.sessionToken)
        })
    }


    render() {
        return (
            <div> 
                <h1>Sign Up</h1>
                <h6>Fill out the form to sign up</h6>
                <Form onSubmit={this.check}>
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input id='firstName' type='text' name='firstName' placeholer='Enter First Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'> Last Name</Label>
                        <Input id='lastName' type='text' name='lastName' placeholer='Enter Last Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='userName'> User Name</Label>
                        <Input id='userName' type='text' name='userName' placeholer='Enter User Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input id='email' type='text' name='email' placeholer='Enter Email' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input id='password' type='password' name='password' placeholer='Enter Password' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password2'>Confirm Password</Label>
                        <Input id='password2' type='password' name='password2' placeholer='Confirm Password' onChange={this.handleChange} />
                    </FormGroup>
                    <Button type='submit' className='button2'> Submit</Button>
                </Form>
            </div>
        )
    }
}
export default props => (
    <AuthContext.Consumer>
    {auth => <Signup {...props} auth={auth} />}
    </AuthContext.Consumer>
);