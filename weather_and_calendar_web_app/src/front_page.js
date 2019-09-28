import React, { Component } from 'react';
import './App.css';
import fire from './config/config';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login';

class Front_page extends Component {
constructor(props){
  super(props);
    this.state = {
      user:{},       //initially user is null
    }
  }
  
componentDidMount = () =>{
  this.authEventHandler();
}

authEventHandler = () => {
  fire.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({user});  //user is authenticated
    }
    else{
      this.setState({user:null}); //user not-authenticated
    }
  });
}
  render = () => {
    return (
     <div>
       {this.state.user ? (<Calendar/>) :(<Login/>) }  
     </div>
    );
  }
}  //if user is authenticated,calendar opens,otherwise login is called...

export default Front_page;
