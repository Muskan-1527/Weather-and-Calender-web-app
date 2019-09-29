import React, { Component } from 'react';
import './App.css';
import fire from './config/config';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login';

class Front_page extends Component {
constructor(props){
  super(props);
    this.state = {
      user:{},
    }
  }
  
componentDidMount = () =>{
  this.authEventHandler();
}

//whether user is authenticated or not...
authEventHandler = () => {
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user});             
    }
    else{
      this.setState({user:null});
    }
  });
}

//if user is authenticated,open calendar,else render login
  render = () => {
    return (
     <div>
       {this.state.user ? (<Calendar/>) :(<Login/>) }  
     </div>
    );
  }
}

export default Front_page;
