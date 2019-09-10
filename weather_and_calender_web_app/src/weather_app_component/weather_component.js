import React from 'react';

const Weather = () => {
    return (
        <div className = "container" >
           <div className = "cityName">
               <h1>London</h1>
               <h1 className = "py-2">25&deg;</h1>
               {minmaxTemperature(19,24)}
               <h4 className = "py-3">Slow Rain</h4>
           </div>
        </div>
    );
};

function minmaxTemperature(min,max) {
    return (
        <h3>
            <span className = "px-4">{min}&deg;</span>
            <span className = "px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;