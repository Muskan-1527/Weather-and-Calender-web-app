import React from 'react';

import './weather_component_style.css';

import Form from './weather_form_component';

const Weather = (props) => {

    return (
        <div className = "WeatherMain" style={{ backgroundImage: `url(${props.src})` }}>
        <div className = "container">
            {/* to show the form */}
            <Form loadweather={props.loadweather} error={props.error} errorWrongEntry={props.errorWrongEntry}/>
            {/* present weather data */}
           <div className = "cards pt-4" >
               {!props.error && !props.errorWrongEntry ? 
               <h1>
                   {props.city}
                   {props.country?(","):null}
                   {props.country}
               </h1> : ""}
               {!props.error && !props.errorWrongEntry ?
               <div className="row py-2">
                   <div className="col-md-3 offset-md-2">
                       
                      {props.city ? (
                          <h5>Sunrise at : {sunrise(props.sunriseTime)}</h5>
                      ):null}
                   </div>
                   <div className="col-md-2">
                   {props.temp_celsius?(
                   <h1>{props.temp_celsius}&deg;</h1>
               ):null}
                   </div>
                   <div className="col-md-3">
                      {props.city ? (
                          <h5>Sunset at : {sunset(props.sunsetTime)}</h5>
                      ):null}
                   </div>
               </div> : null}
               {!props.error && !props.errorWrongEntry  ?
               (minmaxTemperature(props.temp_min,props.temp_max)) : ""}
               {!props.error && !props.errorWrongEntry ? 
               <h4 className = "py-2">{props.description}
               {props.city? <img className="img-fluid" src={`http://openweathermap.org/img/w/${props.icon}.png` } alt="WeatherIcon"/>:null}
               </h4>
               : ""}
               {!props.error && !props.errorWrongEntry  ?
               <h4> 
               <span className="px-4">
               {props.humidity?("Humidity:"):null}
              {props.humidity}
              </span>
              <span className="px-4">
              {props.pressure?("Pressure:"):null}
               {props.pressure}
               </span>
               </h4>
               : ""}
               {!props.error && !props.errorWrongEntry  ?
               <h4 className="pt-2">
                   {props.country?("WindSpeed:"):null}
                   {props.windspeed}
               </h4> : ""}

           </div>
           {/* weather data of next three days */}
           {!props.error && !props.errorWrongEntry  ?
          (props.city? <h1 className = "pt-2" style={{color:"white"}}>Next Three Days Weather</h1> : "")
          : ""}
          {!props.error && !props.errorWrongEntry && props.city ?

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
           </div> : ""}
           

           {!props.error && !props.errorWrongEntry ?
           (props.city? <h1 className = "pt-2" style={{color:"white"}}>Three Hour Format Report</h1> : "") : ""}

           {!props.error && !props.errorWrongEntry && props.city ?

        //    weather report in three hour format
           <div className="row py-3">

            <div className="futureData col-md-3">
                {props.time1}
                {props.temp1 ? <h1>{props.temp1}&deg;</h1>:null}
                {props.weather1 ? <h4>{props.weather1}</h4> : null}
                
            </div>
            <div className="futureData col-md-3">
            {props.time2}
            {props.temp2 ? <h1>{props.temp2}&deg;</h1>:null}
            {props.weather2 ? <h4>{props.weather2}</h4> : null}
            
            </div>
            <div className="futureData col-md-3">
            {props.time3}
            {props.temp3 ? <h1>{props.temp3}&deg;</h1>:null}
            {props.weather3 ? <h4>{props.weather3}</h4> : null}
            
            </div>
            <div className="futureData col-md-3">
            {props.time4}
            {props.temp4 ? <h1>{props.temp4}&deg;</h1>:null}
            {props.weather4 ? <h4>{props.weather4}</h4> : null}
            
            </div>

           </div> : ""}
           {!props.error && !props.errorWrongEntry && props.city ?


           <div className="row py-3">

            <div className="futureData col-md-3">
            {props.time5}
            {props.temp5 ? <h1>{props.temp5}&deg;</h1>:null}
            {props.weather5 ? <h4>{props.weather5}</h4> : null}
            
            </div>
            <div className="futureData col-md-3">
            {props.time6}
            {props.temp6 ? <h1>{props.temp6}&deg;</h1>:null}
            {props.weather6 ? <h4>{props.weather6}</h4> : null}
            
            </div>
            <div className="futureData col-md-3">
            {props.time7}
            {props.temp7 ? <h1>{props.temp7}&deg;</h1>:null}
            {props.weather7 ? <h4>{props.weather7}</h4> : null}
            
            </div>
            <div className="futureData col-md-3">
            {props.time8}
            {props.temp8 ? <h1>{props.temp8}&deg;</h1>:null}
            {props.weather8 ? <h4>{props.weather8}</h4> : null}
            
            </div>
            
           </div>
           : ""}


        </div>
        </div>
    );
};

// function to get the minimum and maximum temperature wuth degree symbol
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

// functio to get the minimum and maximum temperature of next three days with degree sign
function minmaxfuturetemperature(min,max) {
    if(min && max) {
        return (
            <h4>
                {min}/{max}&deg;
            </h4>
        )
    }
}

// function to convert the miliseconds of sunrise in hour and min
function sunrise(sunriseTime) {
    if(sunriseTime){
    const date = new Date(sunriseTime);
    return (
        date.toLocaleTimeString()
    );
    }
}

// function to convert the miliseconds of sunset in hour and min
function sunset(sunsetTime) {
    if(sunsetTime){
    const date = new Date(sunsetTime);
    return (
        date.toLocaleTimeString()
    );
    }
}

// function to get the date of the next day to the present day
function monthday1(Name) {
    if(Name){
        const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        return (
            date.toDateString()
        );
        } 
}

// function to get the date of the second next day to the present day
function monthday2(Name) {
    if(Name) {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    return (
        date.toDateString()
    );
    }
}

// function to get the date of the third next day to the present day
function monthday3(Name) {
    if(Name) {
    const date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);
    return (
        date.toDateString()
    );
  }
}

export default Weather;
