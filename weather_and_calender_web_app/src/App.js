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
      country:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    this.getWeather();
  }


  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }

  getWeather = async() => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8f6e7eafbcaceee6b0fd1759888a64c7');
  
    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description
    });
  
  };

  render() {
    return (
      <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      />
      </div>
    );
  }
}


export default App;
