import React from 'react';

import './weather_form_style.css';

const Form = props => {
    return(
        <div className="container">
          <form onSubmit={props.loadweather} className="pt-md-5">
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" 
                    className="form-control" 
                    name="city" 
                    autoComplete="off"
                    placeholder="city"/>
                </div>
                <div className="col-md-3">
                    <input type="text" 
                    className="form-control" 
                    name="country" 
                    autoComplete="off"
                    placeholder="country"/>
                </div>
                <div className="col-md-3 mt-md-2 text-md-left">
                    <button className="btn btn-warning">Get Weather</button>
                </div>
            </div>
          </form>
        </div>
    )
}

export default Form;