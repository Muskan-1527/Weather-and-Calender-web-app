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
      icon:undefined,
      src:'/all_weather.jpg',
      error:false
    };
  }

  getWeatherImage(ID) {
    switch(true) {
        case ID>=200 && ID<=232:
            this.setState({
                src : '/thunderstorm.jpg'
            });
            break;
        case ID>=300 && ID<=321:
                this.setState({
                    src : '/drizzle.jpg'
                });
            break;
        case ID>=500 && ID<=531:
                this.setState({
                    src : '/rain.jpg'
                });
            break;
        case ID>=600 && ID<=622:
                this.setState({
                    src : '/snow.jpg'
                });
        case ID>=701 && ID<=781:
                this.setState({
                    src : '/atmosphere.jpg'
                });
            break;
        case ID===800:
                this.setState({
                    src : '/clear_sky.jpg'
                });
            break;
        case ID>=801 && ID<=804:
                this.setState({
                    src : '/clouds.jpg'
                });
            break;
    }
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
      icon:response.weather[0].icon,
      error: false
    });
    this.getWeatherImage(response.weather[0].id);
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
        <Form loadweather={this.getWeather} error={this.state.error} src={this.state.src}/>
        
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      icon={this.state.icon}
      src={this.state.src}
      />
        
      </div>
    );
  }
}


export default WeatherApp;
