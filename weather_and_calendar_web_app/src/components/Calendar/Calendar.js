import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import {Route}from 'react-router-dom';
import Event from '../../calendar_app_component/event/event';

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

 onDayClick = () => {
     return(
        <div>
        <Route path="/event" exact component={Event}/>
        </div>
     );
     
 }
    render(){
        return(
            <div>
                <Calendar_app style={style} width="302px"
                onDayClick={() => this.onDayClick()}/>
                <button onClick={this.logout}>Logout</button>
            </div>

        )
    }
}
export default Calendar;