import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/yearly_calendar/calendar_yearly';

const style = {
    position: "relative",
    margin: "50px auto",
}
class Calendar extends Component{
constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
}
 logout(){
     fire.auth().signOut();
 }

 onDayClick = (e, day) => {
     alert(day);
 }
    render(){
        return(
            <div>
                 <div className = "text-center pb-1 pt-2 " style = {{
                    fontSize: "3em"
                }}>CALENDAR</div>
                <Calendar_app style={style} 
                onDayClick={(e,day) => this.onDayClick(e, day)}/>
                <div className = "text-center pb-3" style = {{
                    fontSize: "3em"
                }}>YEARLY VIEW</div>
                <Yearly />
               <div className = "text-center"> <button onClick={this.logout} className = " my-4 p-2 px-4 text-center btn btn-primary">Logout</button></div>
            </div>

        )
    }
}
export default Calendar;