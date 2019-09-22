import React from 'react';

import './weather_form_style.css';

import PresentDate from'./weather_present_time';

const Form = props => {

    return(

        <div className="container" style={{background: 'rgba(0, 0, 0, 0.5)', backgroundImage: `url(${props.src})` }}>
          <form onSubmit={props.loadweather} className="pt-md-4">
            <div>{props.error ? errorShow() : (props.errorWrongEntry ? errorWrongShow() : "")}</div>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input
                     type="text" 
                    className="form-control" 
                    name="city" 
                    autoComplete="on"
                    placeholder="city"/>
                </div>
                <div className="col-md-3">
                    <input type="text" 
                    className="form-control" 
                    name="country" 
                    autoComplete="on"
                    placeholder = "country"/>
                </div>
                <div className="col-md-3 mt-xs-2 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
          </form>
          <div className="pt-md-5">
              <PresentDate/>
          </div>
        </div>
    );
};

function errorShow() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country...!
        </div>
    );
};

function errorWrongShow() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            This city and country is not available in API..<h3>ENTER ANOTHER CITY AND COUNTRY...!</h3>
        </div>
    );
};

export default Form;