import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/yearly_calendar/calendar_yearly';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from '../../axios_file';

const style = {
    position: "relative",
    margin: "50px auto",
}
class Calendar extends Component{
constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.eventSendHandler = this.eventSendHandler.bind(this);
    this.state = {
        modal: false,
        eventname:'',
        eventdesc:''
      };
}
 logout(){
     fire.auth().signOut();
 }

 onDayClick = (e, day) => {
    // alert(day);
    this.setState(prevState => ({
        modal: !prevState.modal
      }));

 }

 changeHandler(e) {
    this.setState({[e.target.name] : e.target.value});
    // console.log(e);
}

eventSendHandler = (e) =>{
    e.preventDefault();
    const eventdata = {
        eventName:this.state.eventname,
        eventDescription:this.state.eventdesc
    }
    axios.post('/events.json',eventdata)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}


    render(){
        const closeBtn = <button className="close" onClick={this.onDayClick}>&times;</button>;
        
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
            
            <div>
        <Modal isOpen={this.state.modal}>
        <ModalHeader close={closeBtn}>ADD EVENT DATA</ModalHeader>
        <ModalBody>
        <div className="modal-body">
        <div className="form-group">
        <label for="exampleEvent">Enter Name of Event</label>
        <input type="text" value={this.state.eventname} className="form-control" name="eventname" placeholder="Enter EventName" onChange={this.changeHandler}/>
        </div>
        <div className="form-group">
        <label for="exampleEventDescription">Enter Event Description</label>
        <input type="textarea" value={this.state.eventdesc} className="form-control" name="eventdesc" placeholder="Enter EventDescription" onChange={this.changeHandler}/>
        </div>
        </div>  

        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.eventSendHandler}>Add Event</Button>{' '}
        <Button color="warning" onClick={this.onDayClick}>Show Events</Button>{' '}
        <Button color="secondary" onClick={this.onDayClick}>Close</Button>
        </ModalFooter>
        </Modal>
        </div>
        </div>
        )
    }
}
export default Calendar; 
