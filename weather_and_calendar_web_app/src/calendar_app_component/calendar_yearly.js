import React, { Component } from 'react';
import {Calendar , CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';
import ReactDOM from 'react-dom';
 
class Yearly extends Component {

    state = {
        today: moment(),
    }

    year = () => {
        return this.state.today.format("Y"); //year like 2019 ,2020 .....
    }
 
  render() {
    function onDatePicked(date) {
        alert(date);
    }
    return (
      <div>
           <Calendar
    year={this.year()}
    showTodayButton="true"
    onPickDate={onDatePicked}
  />
      </div>
    );
  }
}

export default Yearly;