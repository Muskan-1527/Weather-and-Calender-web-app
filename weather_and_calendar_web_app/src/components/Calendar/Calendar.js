import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/yearly_calendar/calendar_yearly';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const style = {
    position: "relative",
    margin: "50px auto",
}
class Calendar extends Component{
constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
        modal: false
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
        <input type="text" className="form-control" name="title" placeholder="Enter EventName"/>
        </div>
        <div className="form-group">
        <label for="exampleEventDescription">Enter Event Description</label>
        <input type="text" className="form-control" name="eventDescription" placeholder="Enter EventDescription"/>
        </div>
        </div>  

        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.onDayClick}>Add Event</Button>{' '}
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
