import React from 'react';
import Weather from './weather_app_component/weather_component';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherApp extends React.Component {

  constructor() {
    super();
    // Declaration of all variables
    this.state = {
      // present data variables
      city: undefined,
      country: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      humidity: undefined,
      pressure: undefined,
      icon: undefined,
      sunrise: undefined,
      sunset: undefined,
      windspeed: undefined,
      // next three days data variables
      description1: undefined,
      description2: undefined,
      description3: undefined,
      icon1: undefined,
      icon2: undefined,
      icon3: undefined,
      temp_max1: undefined,
      temp_min1: undefined,
      temp_max2: undefined,
      temp_min2: undefined,
      temp_max3: undefined,
      temp_min3: undefined,
      // three hour format data variables
      temp1: undefined,
      temp2: undefined,
      temp3: undefined,
      temp4: undefined,
      temp5: undefined,
      temp6: undefined,
      temp7: undefined,
      temp8: undefined,
      time1: undefined,
      time2: undefined,
      time3: undefined,
      time4: undefined,
      time5: undefined,
      time6: undefined,
      time7: undefined,
      time8: undefined,
      weatherDescription1: undefined,
      weatherDescription2: undefined,
      weatherDescription3: undefined,
      weatherDescription4: undefined,
      weatherDescription5: undefined,
      weatherDescription6: undefined,
      weatherDescription7: undefined,
      weatherDescription8: undefined,
      // image source
      src: '/all_weather.jpg',
      // errors
      errorShown: false,
      errorWrongEntry: false
    };
  }

  // function to set the image source according to the description of weather
  getWeatherImage(ID) {
    switch (true) {
      case ID >= 200 && ID <= 232:
        this.setState({
          src: '/thunderstorm.jpg'
        });
        break;
      case ID >= 300 && ID <= 321:
        this.setState({
          src: '/drizzle.jpg'
        });
        break;
      case ID >= 500 && ID <= 531:
        this.setState({
          src: '/rain.jpg'
        });
        break;
      case ID >= 600 && ID <= 622:
        this.setState({
          src: '/snow.jpg'
        });
        break;
      case ID >= 701 && ID <= 781:
        this.setState({
          src: '/atmosphere.jpg'
        });
        break;
      case ID === 800:
        this.setState({
          src: '/clear_sky.jpg'
        });
        break;
      case ID >= 801 && ID <= 804:
        this.setState({
          src: '/clouds.jpg'
        });
        break;
      default:
        this.setState({
          src: '/all_weather.jpg'
        });
    }
  }

  // function to convert the temperature from kelvin to celcius
  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }


  getWeather = async e => {

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    e.preventDefault();

    if (country && city) {
      // fetching api

      // api for next three days data
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&APPID=c10e7100063f10864ba3ffb839aed7f3`
      ).catch((error) => {
        alert(error);
        console.log(error);
      });

      //api for three hour weather updates
      const api_call2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=c10e7100063f10864ba3ffb839aed7f3`
      ).catch((error) => {
        alert(error);
        console.log(error);
      });

      // api for present weather condition
      const api_call3 = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=8f6e7eafbcaceee6b0fd1759888a64c7`
      ).catch((error) => {
        alert(error);
        console.log(error);
      });

      const response = await api_call.json(); // next three days

      const response2 = await api_call2.json(); // three hour updates

      const response3 = await api_call3.json(); // present weather

      if (response.cod !== "404") {
        this.setState({
          city: response3.name,
          country: response3.sys.country,
          celsius: this.calCelsius(response3.main.temp),
          temp_max: this.calCelsius(response.list[0].temp.max),
          temp_min: this.calCelsius(response.list[0].temp.min),
          description: response3.weather[0].description,
          humidity: response3.main.humidity,
          pressure: response3.main.pressure,
          icon: response3.weather[0].icon,
          description1: response.list[1].weather[0].description,
          description2: response.list[2].weather[0].description,
          description3: response.list[3].weather[0].description,
          icon1: response.list[1].weather[0].icon,
          icon2: response.list[2].weather[0].icon,
          icon3: response.list[3].weather[0].icon,
          temp_max1: this.calCelsius(response.list[0].temp.max),
          temp_min1: this.calCelsius(response.list[0].temp.min),
          temp_max2: this.calCelsius(response.list[0].temp.max),
          temp_min2: this.calCelsius(response.list[0].temp.min),
          temp_max3: this.calCelsius(response.list[0].temp.max),
          temp_min3: this.calCelsius(response.list[0].temp.min),
          sunrise: response3.sys.sunrise,
          sunset: response3.sys.sunset,
          windspeed: response3.wind.speed,
          temp1: this.calCelsius(response2.list[0].main.temp),
          temp2: this.calCelsius(response2.list[1].main.temp),
          temp3: this.calCelsius(response2.list[2].main.temp),
          temp4: this.calCelsius(response2.list[3].main.temp),
          temp5: this.calCelsius(response2.list[4].main.temp),
          temp6: this.calCelsius(response2.list[5].main.temp),
          temp7: this.calCelsius(response2.list[6].main.temp),
          temp8: this.calCelsius(response2.list[7].main.temp),
          time1: response2.list[0].dt_txt,
          time2: response2.list[1].dt_txt,
          time3: response2.list[2].dt_txt,
          time4: response2.list[3].dt_txt,
          time5: response2.list[4].dt_txt,
          time6: response2.list[5].dt_txt,
          time7: response2.list[6].dt_txt,
          time8: response2.list[7].dt_txt,
          weatherDescription1: response2.list[0].weather[0].description,
          weatherDescription2: response2.list[1].weather[0].description,
          weatherDescription3: response2.list[2].weather[0].description,
          weatherDescription4: response2.list[3].weather[0].description,
          weatherDescription5: response2.list[4].weather[0].description,
          weatherDescription6: response2.list[5].weather[0].description,
          weatherDescription7: response2.list[6].weather[0].description,
          weatherDescription8: response2.list[7].weather[0].description,
          errorShown: false,
          errorWrongEntry: false
        });
        this.getWeatherImage(response3.weather[0].id);
      } else {
        this.setState({
          errorShown: false,
          errorWrongEntry: true
        });
      }
    } else {
      this.setState({
        src: "/all_weather.jpg",
        errorShown: true
      });
    }

  };

  render() {
    return (
      <div className="App" style = {{
        marginTop: "-1rem"
      }} >

        <Weather
          loadweather={this.getWeather} error={this.state.errorShown} errorWrongEntry={this.state.errorWrongEntry}
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
          windspeed={this.state.windspeed}
          src={!this.errorShown ? ((!this.state.errorWrongEntry) ? (this.state.src) : "/all_weather.jpg") : "/all_weather.jpg"}
          temp1={this.state.temp1}
          temp2={this.state.temp2}
          temp3={this.state.temp3}
          temp4={this.state.temp4}
          temp5={this.state.temp5}
          temp6={this.state.temp6}
          temp7={this.state.temp7}
          temp8={this.state.temp8}
          time1={this.state.time1}
          time2={this.state.time2}
          time3={this.state.time3}
          time4={this.state.time4}
          time5={this.state.time5}
          time6={this.state.time6}
          time7={this.state.time7}
          time8={this.state.time8}
          weather1={this.state.weatherDescription1}
          weather2={this.state.weatherDescription2}
          weather3={this.state.weatherDescription3}
          weather4={this.state.weatherDescription4}
          weather5={this.state.weatherDescription5}
          weather6={this.state.weatherDescription6}
          weather7={this.state.weatherDescription7}
          weather8={this.state.weatherDescription8}
        />

      </div>
    );
  }
}


export default WeatherApp;
