import React, { Component } from 'react';
import {Calendar , CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';
import ReactDOM from 'react-dom';
import './calendar_yearly_style.css';
 
class Yearly extends Component {

  constructor(props) {
    super(props);

    const today = moment();

    this.state = {

        present: moment(),
        year: today.year(),
        selectedDay:today,
        showTodayBtn: true
    }
  }

    year = () => {
        return this.state.present.format("Y"); //year like 2019 ,2020 .....
    }

    onPrevYear() {
      this.setState(prevState => ({
        year: prevState.year - 1
      }));
    }
  
    onNextYear() {
      this.setState(prevState => ({
        year: prevState.year + 1
      }));
    }
  
    goToToday() {
      const today = moment();
  
      this.setState({
        selectedDay: today,
        year: today.year()
      });
    }
 
  render() {
    const {
      year,
      showTodayBtn,
      selectedDay,
    } = this.state;
    return (
      <div id="calendar">
      <CalendarControls
        year={year}
        showTodayButton={showTodayBtn}
        onPrevYear={() => this.onPrevYear()}
        onNextYear={() => this.onNextYear()}
        goToToday={() => this.goToToday()}
      />
      <Calendar
        year={year}
        selectedDay={selectedDay}
      />
    </div>
    );
  }
}

export default Yearly;