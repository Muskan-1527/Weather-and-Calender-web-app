	
import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/calendar_yearly';

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
                <Calendar_app style={style} 
                onDayClick={(e,day) => this.onDayClick(e, day)}/>
                <button onClick={this.logout}>Logout</button>
                <Yearly />
            </div>

        )
    }
}
export default Calendar;
