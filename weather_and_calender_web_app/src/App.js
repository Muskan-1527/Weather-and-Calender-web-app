import React from 'react';
import './App.css';

import Weather from './weather_app_component/weather_component';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_key = "8f6e7eafbcaceee6b0fd1759888a64c7";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country:undefined
    };
    this.getWeather();
  }

  getWeather = async() => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8f6e7eafbcaceee6b0fd1759888a64c7');
  
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country
    });
  
  };

  render() {
    return (
      <div className="App">
      <Weather city={this.state.city} country={this.state.country} />
      </div>
    );
  }
}


export default App;
