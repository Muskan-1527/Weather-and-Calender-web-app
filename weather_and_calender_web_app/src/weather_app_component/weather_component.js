import React from 'react';

import './weather_component_style.css';

import Form from './weather_form_component';

const Weather = (props) => {


    return (
        <div className = "container" style={{ backgroundImage: `url(${props.src})` }}>
            <Form loadweather={props.loadweather}/>
           <div className = "cards pt-4" >
               <h1>
                   {props.city}
                   {props.country?(","):null}
                   {props.country}
               </h1>

               {props.temp_celsius?(
                   <h1 className = "py-2">{props.temp_celsius}&deg;</h1>
               ):null}
               {minmaxTemperature(props.temp_min,props.temp_max)}
               <h4 className = "py-3">{props.description}
               {props.city? <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon}.png` } alt="WeatherIcon"/>:null}
               </h4>
               <h4 className = "py-1"> 
               <span className="px-4">
               {props.humidity?("Humidity:"):null}
              {props.humidity}
              </span>
              <span className="px-4">
              {props.pressure?("Pressure:"):null}
               {props.pressure}
               </span>
               </h4>
           </div>
           <div className="row py-3">
              <div className="futureData col-md-3 offset-md-2">
               {monthday1(props.city)}
               <h5 className = "py-2">{props.description1}</h5>
               <h1>{props.city? <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon1}.png` } alt="WeatherIcon"/>:null}</h1>
               {minmaxfuturetemperature(props.temp_min1,props.temp_max1)}
              </div>
              <div className="futureData col-md-3">
                 {monthday2(props.city)} 
                 <h5 className = "py-2">{props.description2}</h5>
                 <h1>{props.city? <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon2}.png` } alt="WeatherIcon"/>:null}</h1>
                 {minmaxfuturetemperature(props.temp_min2,props.temp_max2)}
              </div>
              <div className="futureData col-md-3">
                  {monthday3(props.city)}
                  <h5 className = "py-2">{props.description3}</h5>
                  <h1>{props.city? <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon3}.png` } alt="WeatherIcon"/>:null}</h1>
                  {minmaxfuturetemperature(props.temp_min3,props.temp_max3)}
              </div>
           </div>
        </div>
    );
};

function minmaxTemperature(min,max) {
    if(min && max){
    return (
        <h3>
            <span className = "px-2">min:{min}&deg;</span>
            <span className = "px-2">max:{max}&deg;</span>
        </h3>
    );
    }
}

function minmaxfuturetemperature(min,max) {
    if(min && max) {
        return (
            <h4>
                {min}/{max}&deg;
            </h4>
        )
    }
}

function monthday1(Name) {
    if(Name){
        const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        return (
            date.toDateString()
        );
        } 
}

function monthday2(Name) {
    if(Name) {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    return (
        date.toDateString()
    );
    }
}

function monthday3(Name) {
    if(Name) {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    return (
        date.toDateString()
    );
  }
}


export default Weather;