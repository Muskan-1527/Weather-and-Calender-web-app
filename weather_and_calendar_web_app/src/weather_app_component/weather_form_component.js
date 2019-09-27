import React from 'react';

import './weather_form_style.css';

import PresentDate from'./weather_present_time';

const Form = props => {

    return(


        <div className="container">
          <form onSubmit={props.loadweather} className="pt-md-4">
            <div>{props.error ? errorShow() : (props.errorWrongEntry ? errorWrongShow() : "")}</div>
            <div className="row">
                {/* input field to enter city */}
                <div className="col-md-3 offset-md-2">
                    <input
                     type="text" 
                    className="form-control" 
                    name="city" 
                    autoComplete="on"
                    placeholder="Enter City"/>
                </div>
                {/* input field to enter country */}
                <div className="col-md-3">
                    <input type="text" 
                    className="form-control" 
                    name="country" 
                    autoComplete="on"
                    placeholder = "Enter Country"/>
                </div>
                {/* submit button to get the weather report */}
                <div className="col-md-3 mt-xs-2 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
          </form>
          {/* present date and day */}
          <div className="pt-md-5">
              <PresentDate/>
          </div>
        </div>
    );
};

// function to show the error message if both city and country are not entered by the user
function errorShow() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country...!
        </div>
    );
};

// function to show the error if the data of the city is not available in the api
function errorWrongShow() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            This city and country is not available in API..<h3>ENTER ANOTHER CITY AND COUNTRY...!</h3>
        </div>
    );
};

export default Form;