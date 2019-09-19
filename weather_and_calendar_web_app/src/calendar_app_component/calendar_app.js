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
        momentCntext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();
    
    render() {
        return (
            <div className = "calendar-container">
                <h2>Calendar</h2>
            </div>
        );
    }
}

export default Calendar_app;