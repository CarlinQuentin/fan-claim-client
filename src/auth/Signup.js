import React, { Component } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { AuthContext } from './AuthContext';
import '../auth/AllCss/auth.css';

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
            this.props.setToken(data.sessionToken)
        })
    }


    render() {
        return (
            <div> 
                <h1>Sign Up</h1>
                <h4>New User?</h4>
                <Form onSubmit={this.check} className='form' col-md='6'>
                    <FormGroup>
                        <label for='firstName'>First Name</label>
                        <input id='firstName' type='text' name='firstName' placeholder='Enter First Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for='lastName'> Last Name</label>
                        <input id='lastName' type='text' name='lastName' placeholder='Enter Last Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for='userName'> User Name</label>
                        <input id='userName' type='text' name='userName' placeholder='Enter User Name' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for='email'>Email</label>
                        <input id='email' type='text' name='email' placeholder='Enter Email' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for='password'>Password</label>
                        <input id='password' type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for='password2'>Confirm Password</label>
                        <input id='password2' type='password' name='password2' placeholder='Confirm Password' onChange={this.handleChange} />
                    </FormGroup>
                    <button type='submit' className='button2'> Submit</button>
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