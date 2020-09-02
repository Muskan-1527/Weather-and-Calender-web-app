import React from 'react';
import moment from 'moment';
import './calendar_app.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

 class Calendar_app extends React.Component {
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null,
        selectedMonth: null,
        selectedYear: null,
        festivalData: [],
        festivalDataPresent: [],
        addFestivalModal:  false
    }

    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.toggle = this.toggle.bind(this);
    }

    
//Modal shown condition changes
    toggle () {
        this.setState(prevState => ({
            addFestivalModal: !prevState.addFestivalModal
        }));
    }

    //calling of festival shown function on loading of page
    componentWillMount() {
        this.getFestival();
    }
    // componentDidUpdate() {
    //     this.getFestival();
    // }

    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months(); // ["January" , "February" , ....]
    festivalClass = ""; // styling of days of festival
    festivalName = ""; // show festival name
    TodayFestival = null;  // present festival name
    TodayFestivalDescription = ""; // present festival description

    year = () => {
        return this.state.dateContext.format("Y"); //year like 2019 ,2020 .....
    }
    month = () => {
        return this.state.dateContext.format("MMMM"); //month like septenber , october , ....

    }
    monthIndex = () => {
        return this.state.dateContext.format("M"); // month index like 9 , 10 , ....
    }
    monthPresentIndex = () => {
        return this.state.today.format("M");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth(); // 30 , 31 , ....
    }
    daysInCurrentMonth = () => {
        return this.state.today.daysInMonth();
    }
    currentDate = () => {
        return this.state.today.get("date"); //  date

    }
    currentDay = () => {
        return this.state.dateContext.format("D"); //  day
    }
    currentMonth = () => {
        return this.state.today.format("MMMM"); // present month
    }
    currentYear = () => {
        return this.state.today.format("Y"); // present year
    }

    //to get the index of first weekday of the month
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    // function to set the month shown as selected
    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    // function to show the next month
    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    // function to show the previous month
    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    //function to get the present month
    presentMonth = () => {
        let dateContext = Object.assign({}, this.state.today);
        dateContext = moment(dateContext).set({'year':this.currentYear(),'month':this.currentMonth()});
        this.setState({
            dateContext: dateContext
        });
        this.props.onpresentMonth && this.props.onpresesentMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }

    // function to show month list and change the month
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e)=> {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    //month navbar
    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                 <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    // function to change the year 
    setYear = (year) => {
        this.getFestival();
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        });
    }

    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    // year navbar
    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue = {this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onYearChange(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="label-year"
                onDoubleClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }


    // function to make a selected day
    onDayClick = (e, day) => {

        this.setState({
            selectedDay: day,
            selectedMonth: this.month(),
            selectedYear: this.year()
        }, () => {
            // console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    // function to fetch the api of festivals
    getFestival = async e => {

        const getyear = this.year();

        const api_call_calendar = await fetch(
            `https://calendarific.com/api/v2/holidays?&api_key=84aea4a65ebbc7ba34365854e583bcfbbcfd8d1b&country=IN&year=${getyear}`
            );
    
        const response_calendar = await api_call_calendar.json();

        const api_call_calendar_present = await fetch(
            `https://calendarific.com/api/v2/holidays?&api_key=84aea4a65ebbc7ba34365854e583bcfbbcfd8d1b&country=IN&year=${this.currentYear()}`
            );
    
        const response_calendar_present = await api_call_calendar_present.json();
          
        // console.log(response_calendar);

        this.setState({
            festivalData: response_calendar.response.holidays,
            festivalDataPresent: response_calendar_present.response.holidays
        })
    }

    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            let SundayHead =  (day == "Sun" ? " SundayHeadColor" : "") 
            let WeekDayClass = "week-day"
            return (
                <td key={day} className= {WeekDayClass + SundayHead}>{day}</td>
                
            )
        });

        // to leave the empty space before the first day of the month
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }

        // console.log("blanks: ", blanks);

        let daysInMonth = []; // array of number of days in the opened month
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d === this.currentDate() ? this.month() === this.currentMonth() ? this.year() === this.currentYear() ? "day current-day" : "day" : "day": "day");
            let selectedClass = (d === this.state.selectedDay ? this.month() === this.state.selectedMonth ? this.year() === this.state.selectedYear ? " selected-day " : "" : "" : "");
            let SundayClass = (this.firstDayOfMonth() == 0 ? (d === 1 || d === 8 || d === 15 || d === 22 || d === 29) ? " sunday" : "" 
            : this.firstDayOfMonth() == 1 ? (d === 7 || d === 14 || d === 21 || d === 28) ? " sunday" : ""
            : this.firstDayOfMonth() == 2 ? (d === 6 || d === 13 || d === 20 || d === 27) ? " sunday" : ""
            : this.firstDayOfMonth() == 3 ? (d === 5 || d === 12 || d === 19 || d === 26) ? " sunday" : ""
            : this.firstDayOfMonth() == 4 ? (d === 4 || d === 11 || d === 18 || d === 25) ? " sunday" : ""
            : this.firstDayOfMonth() == 5 ? (d === 3 || d === 10 || d === 17 || d === 24 || d === 31) ? " sunday" : "" 
            : this.firstDayOfMonth() == 6 ? (d === 2 || d === 9 || d === 16 || d === 23 || d === 30) ? " sunday" : ""
            : "" 
            ); 
            // console.log(this.state.festivalData.length);
            for(let a = 0 ; a < this.state.festivalData.length ; a++) {
                if(this.state.festivalData[a].date.datetime.month == this.monthIndex()) {
                        if(d == this.state.festivalData[a].date.datetime.day) {
                            this.festivalName = this.state.festivalData[a].name;
                            this.festivalClass = " festival";
                            break;
                        }
                        else{
                            this.festivalName = "";
                            this.festivalClass = "";
                        }
                    }
                    this.festivalClass = "";
                }

           // to show all days with respective styling
            daysInMonth.push(
                <td key={d} className={className + selectedClass + SundayClass + this.festivalClass} >
                    <span onClick={(e)=>{this.onDayClick(e, d)}}><div>{this.festivalName}</div>{d}</span>
                </td>
            );
        }
        for (let d = 1; d <= this.daysInCurrentMonth() ; d++) {
            for(let a = 0 ; a < this.state.festivalDataPresent.length ; a++) {
                if(this.state.festivalDataPresent[a].date.datetime.month == this.monthPresentIndex()) {
                        if(d == this.state.festivalDataPresent[a].date.datetime.day) {
                            if(d == this.currentDate()) 
                        {
                            this.TodayFestival = this.state.festivalDataPresent[a].name;
                            this.TodayFestivalDescription = this.state.festivalDataPresent[a].description;
                            break;
                        }
                        }
                    }
                }
        }

        // console.log("days: ", daysInMonth);
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })

        return (
            <div className="calendar-container-Month" style={this.style}>
                
                <table className="calendar-Month">
                    <thead>
                        <tr className="calendar-header-Month">
                            <td colSpan="5">
                                <div style = {{
                                    float: "left",
                                    marginRight: "4rem",
                                    marginLeft: "3rem",
                                    color:"#c70039",
                                    textDecoration: "underline"
                                }}>
                                <this.MonthNav />
                                </div>
                                <div className = "YearNav">
                                <this.YearNav />
                                </div>
                            </td>

                            <td>
                            {/* button which opens a modal contaiing today's festival and description of the festival */}
                            <Button className="displayfest btn btn-success mb-2" onClick={this.toggle}>Display Today's Festival</Button>
        <Modal isOpen={this.state.addFestivalModal} toggle={this.toggle}  centered={true} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><div className = "font-weight-bold" style = {{
              marginLeft : "8rem" , 
              fontSize : "1.5rem",
              color: "crimson"
          }}>
              Today's Festival</div></ModalHeader>
          <ModalBody className = "text-center">
              <div style = {{
                  color: "#084b34",
                  fontSize: "1.5rem"
              }}>
           <i> {this.TodayFestival ? this.TodayFestival : "Today , there is no festival" }</i>
            </div>
            <div style = {{
                color: "#768015",
                fontSize: "1.2rem"
            }}>{this.TodayFestivalDescription}</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
                            </td>
                            {/* icons to go to the previous , next and present month */}
                            <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left px-1"
                                    onClick={(e)=> {this.prevMonth()}}>
                                </i>
                                <i className="prev fa fa-fw fa-chevron-right px-2"
                                    onClick={(e)=> {this.nextMonth()}}>
                                </i>
                                <i className="fa fa-calendar-check-o fa-lg px-4" 
                                   onClick={(e)=> {this.presentMonth()}}>today
                                </i>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
                <div style = {{
                    marginLeft : "30rem"
                }}>
                <div>
                    <div className = "currentDayInfo" style = {{
                        width : "10px",
                        height : "10px",
                        backgroundColor : "#4285f4",
                        margin : "0.5rem",
                        float : "left",
                        border : "1px solid black"
                    }}>
                    </div>
                    <div style = {{
                        float : "left"
                    }}>
                        Present Day
                    </div>
                </div>
                <div>
                    <div className = "currentDayInfo" style = {{
                        width : "10px",
                        height : "10px",
                        backgroundColor : "pink",
                        margin : "0.5rem",
                        marginLeft : "1rem",
                        float : "left",
                        border : "1px solid black"
                    }}>
                    </div>
                    <div style = {{
                        float : "left"
                    }}>
                        Festivals
                    </div>
                </div>
                <div>
                    <div className = "currentDayInfo" style = {{
                        width : "10px",
                        height : "10px",
                        backgroundColor : "yellow",
                        margin : "0.5rem",
                        marginLeft : "1rem",
                        float : "left",
                        border : "1px solid black"
                    }}>
                    </div>
                    <div style = {{
                        float : "left"
                    }}>
                        Selected Day
                    </div>
                </div>
                <div>
                    <div className = "currentDayInfo" style = {{
                        width : "10px",
                        height : "10px",
                        backgroundColor : "#eef6f7",
                        margin : "0.5rem",
                        marginLeft : "1rem",
                        float : "left",
                        border : "1px solid black"
                    }}>
                    </div>
                    <div style = {{
                        float : "left"
                    }}>
                        Sunday
                    </div>
                </div>
              </div>
                </div>

        );
    }

}

export default Calendar_app;

