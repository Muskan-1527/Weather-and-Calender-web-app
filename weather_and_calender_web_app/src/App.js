import React from 'react';
import './App.css';

import Weather from './weather_app_component/weather_component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './weather_app_component/weather_form_component';

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
      humidity:undefined,
      pressure:undefined,
      error:false
    };
  }


  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }

  getWeather = async(e) => {

    e.preventDefault();

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=8f6e7eafbcaceee6b0fd1759888a64c7');
  

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      humidity:response.main.humidity,
      pressure:response.main.pressure
    });
  
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather}/>
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      />
      </div>
    );
  }
}


export default App;
