import React, { Component } from 'react';
import Auth from './auth/Auth'
import './App.css';
import {AuthContext} from './auth/AuthContext'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  constructor(){
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token)
      this.setState({sessinToken : token})
    }
    this.setEmail = (email) => {
      localStorage.setItem('email', email)
      this.setState({sessionEmail : email})
    }
    this.state = {
      sessionToken: '',
      sessionEmail: '',
      setToken: this.setToken,
      setEmail: this.setEmail
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({sessionToken: token });
  }

  setSessionEmail = (specialEmail) => {
    localStorage.setItem('email', specialEmail)
    this.setState({ email: specialEmail})
  }

  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token') && this.state.sessionToken !== 'undefined' && this.state.sessionToken !== ''){
      return(
        'This is a placeholder for full auth'
      )
    } else{
      return(
        <Auth setToken={this.setSessionState} email={this.setSessionEmail} />
      )
    }
  }

  render() {
    return (
      <Router>
        <AuthContext.Provider value={this.state}>
          <div className="App">
            {this.protectedViews()}
          </div>
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;
