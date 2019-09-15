import React, { Component } from 'react';
import './App.css';
import fire from './config/config';
import Buildcontrols from './components/Buildcontrols/Buildcontrols';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login';

class App extends Component {
constructor(props){
  super(props);
    this.state = {
      user:{},
    }
  }
  
componentDidMount = () =>{
  this.authEventHandler();
}

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
  render = () => {
    return (
     <div>
       <Buildcontrols/>
       {this.state.user ? (<Calendar/>) :(<Login/>) }
     </div>
    );
  }
}

export default App;
