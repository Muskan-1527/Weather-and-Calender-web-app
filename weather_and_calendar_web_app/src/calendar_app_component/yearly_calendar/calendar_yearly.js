import React, { Component } from 'react';
import {Calendar , CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';
import './calendar_yearly_style.css';
 
class Yearly extends Component {

  constructor(props) {
    super(props);

    const today = moment(); // present date , day , year , ..

    this.state = {

        present: moment(),
        year: today.year(),
        selectedDay:today // present date
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
      selectedDay,
    } = this.state;
    return (
      <div id="calendar">
      <CalendarControls
        year={year}
        showTodayButton={true}
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