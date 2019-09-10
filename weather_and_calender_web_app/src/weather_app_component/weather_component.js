import React from 'react';


const Weather = (props) => {
    return (
        <div className = "container" >
           <div className = "cards pt-4">
               <h1>
                   {props.city}
                   {props.country?(","):null}
                   {props.country}
               </h1>

               {props.temp_celsius?(
                   <h1 className = "py-2">{props.temp_celsius}&deg;</h1>
               ):null}

               
               {minmaxTemperature(props.temp_min,props.temp_max)}


               <h4 className = "py-3">{props.description}</h4>
           </div>
        </div>
    );
};

function minmaxTemperature(min,max) {
    if(min && max){
    return (
        <h3>
            <span className = "px-4">min:{min}&deg;</span>
            <span className = "px-4">max:{max}&deg;</span>
        </h3>
    );
    }
}

export default Weather;