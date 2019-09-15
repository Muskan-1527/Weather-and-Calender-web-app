import React from 'react';
import Weather from './weather_app_component/weather_component';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      description1:undefined,
      description2:undefined,
      description3:undefined,
      icon1:undefined,
      icon2:undefined,
      icon3:undefined,
      temp_max1:undefined,
      temp_min1:undefined,
      temp_max2:undefined,
      temp_min2:undefined,
      temp_max3:undefined,
      temp_min3:undefined,
      sunrise:undefined,
      sunset:undefined,
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
                break;
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
      default:
        this.setState({
          src : '/all_weather.jpg'
        });
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
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&APPID=c10e7100063f10864ba3ffb839aed7f3`
      );
  
    const response = await api_call.json();

    this.setState({
      city:response.city.name,
      country:response.city.country,
      celsius:this.calCelsius(response.list[0].temp.day),
      temp_max:this.calCelsius(response.list[0].temp.max),
      temp_min:this.calCelsius(response.list[0].temp.min),
      description:response.list[0].weather[0].description,
      humidity:response.list[0].humidity,
      pressure:response.list[0].pressure,
      icon:response.list[0].weather[0].icon,
      description1:response.list[1].weather[0].description,
      description2:response.list[2].weather[0].description,
      description3:response.list[3].weather[0].description,
      icon1:response.list[1].weather[0].icon,
      icon2:response.list[2].weather[0].icon,
      icon3:response.list[3].weather[0].icon,
      temp_max1:this.calCelsius(response.list[0].temp.max),
      temp_min1:this.calCelsius(response.list[0].temp.min),
      temp_max2:this.calCelsius(response.list[0].temp.max),
      temp_min2:this.calCelsius(response.list[0].temp.min),
      temp_max3:this.calCelsius(response.list[0].temp.max),
      temp_min3:this.calCelsius(response.list[0].temp.min),
      sunrise:response.list[0].sunrise,
      sunset:response.list[0].sunset,
      error: false
    });
    this.getWeatherImage(response.list[0].weather[0].id);
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
        
      <Weather 
      loadweather={this.getWeather} error={this.state.error} src={this.state.src}
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      humidity={this.state.humidity}
      pressure={this.state.pressure}
      icon={this.state.icon}
      description1={this.state.description1}
      description2={this.state.description2}
      description3={this.state.description3}
      icon1={this.state.icon1}
      icon2={this.state.icon2}
      icon3={this.state.icon3}
      temp_max1={this.state.temp_max1}
      temp_min1={this.state.temp_min1}
      temp_max2={this.state.temp_max2}
      temp_min2={this.state.temp_min2}
      temp_max3={this.state.temp_max3}
      temp_min3={this.state.temp_min3}
      sunriseTime={this.state.sunrise}
      sunsetTime={this.state.sunset}
      src={this.state.src}
      />
        
      </div>
    );
  }
}


export default WeatherApp;
