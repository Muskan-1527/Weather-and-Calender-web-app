import React from 'react';
import Weather from './weather_app_component/weather_component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './weather_app_component/weather_form_component';

class WeatherApp extends React.Component {

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
      id:undefined,
      error:false
    };
  }


  calCelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell;
  }

  

  getWeather = async e => {

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

      e.preventDefault();

    if(country && city){
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8f6e7eafbcaceee6b0fd1759888a64c7`
      );
  
    const response = await api_call.json();

    this.setState({
      city:response.name,
      country:response.sys.country,
      celsius:this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      humidity:response.main.humidity,
      pressure:response.main.pressure,
      id:response.weather[0].id,
      error: false
    });
    console.log(response);
  }else {
    this.setState({
      error:true
    });
  }
  
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      id={this.state.id}
      />
        
      </div>
    );
  }
}


export default WeatherApp;
