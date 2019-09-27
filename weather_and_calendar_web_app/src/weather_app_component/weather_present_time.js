import React from 'react';

class PresentDate extends React.Component {
    state = {
        curTime: null,
        day:null
    }

    

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString(),//getting the current time
                day : new Date().getDay().toLocaleString()//getting the current day
            })
        },1000)
    }

    render() {
        return (
            <div className="font-weight-bold font-italic " style={{color:"white"}}>
                {/* Presenting the current time */}
               IST: {this.state.curTime}
               <h4 className="font-weight-bold font-italic py-1" style={{color:"white"}}>
                   {/* presenting the present day */}
                   {WeekDay(this.state.day)}
               </h4>
            </div>
        )
    }

}

// function to get the day according to the index of the day 
function WeekDay(dayIndex) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  }

export default PresentDate;