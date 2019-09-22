import React from 'react';

class PresentDate extends React.Component {
    state = {
        curTime: null,
        day:null
    }

    

    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString(),
                day : new Date().getDay().toLocaleString()
            })
        },1000)
    }

    render() {
        return (
            <div className="font-weight-bold font-italic " style={{color:"white"}}>
               IST: {this.state.curTime}
               <h4 className="font-weight-bold font-italic py-1" style={{color:"white"}}>
                   {WeekDay(this.state.day)}
               </h4>
            </div>
        )
    }

}

function WeekDay(dayIndex) {
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex];
  }

export default PresentDate;