import React from 'react';
import moment from 'moment';
import './calendar_app.css';

class Calendar_app extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }

    month = () => {
        return this.state.dateContext.format("MMMM");
    }

    daysInMonth = () => {
        return this.state.dateContext.dateInMonth();
    }

    currentDate = () => {
        return this.state.dateContext.get("date");
    }

    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
    }
    
    render() {

        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });
        return (
            <div className = "calendar-container">
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar_app;