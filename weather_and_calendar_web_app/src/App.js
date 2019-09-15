import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import BuildControls from '../src/components/Buildcontrols/Buildcontrols';
class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
<BuildControls/>
</div>
      </BrowserRouter>


    );
  }
}

export default App;
