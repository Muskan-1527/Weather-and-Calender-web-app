import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/yearly_calendar/calendar_yearly';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from '../../axios_file';
import moment from 'moment';

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
    this.addEventDataHandler = this.addEventDataHandler.bind(this);
    this.resetData = this.resetData.bind(this);
    this.monthIndex = this.monthIndex.bind(this);
    this.year = this.year.bind(this);
   

    this.state = {
        dateContext: moment(),
        today: moment(),
        modal: false,
        eventname:'',
        eventdesc:'',
        selectedDay: null,
        selectedMonth: null,
        selectedYear: null,
        btnClicked:false,
      };
}
 logout(){
     fire.auth().signOut();
 }


 onDayClick = (e,day) => {
    this.setState(prevState => ({
        modal: !prevState.modal
      }));
    
    this.setState({
        selectedDay: day,
        selectedMonth:this.monthIndex(),
        selectedYear: this.year(),
        btnClicked:false
    }
    );
    this.props.onDayClick && this.props.onDayClick(e, day);
    this.resetData();
 }

 monthIndex = () => {
  return this.state.dateContext.format("M"); // month index like 9 , 10 , ....
}


 year = () => {
    return this.state.dateContext.format("Y"); //year like 2019 ,2020 .....
 }



resetData = () => {
    this.state.eventname='';
    this.state.eventdesc='';
}

 changeHandler(e) {
    this.setState({[e.target.name] : e.target.value});
}

eventSendHandler = (e) =>{
    const eventdata = {
        eventName:this.state.eventname,
        eventDescription:this.state.eventdesc,
        eventDay:this.state.selectedDay+"/"+this.state.selectedMonth+"/"+this.state.selectedYear
    }
    axios.post('/events.json',eventdata)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

eventEmptyCallHandler = () => {
    this.setState({
        btnClicked:true
    })
}

addEventDataHandler = () =>{
        this.eventSendHandler();
        this.onDayClick();
        this.resetData();
       
    }


    render() {

        const closeBtn = <button className="close" onClick={this.onDayClick}>&times;</button>
        
        return(
            <div>
                 <div className = "text-center pb-1 pt-2 " style = {{
                    fontSize: "3em"
                }}>CALENDAR</div>
                <Calendar_app style={style} 
                onDayClick={(e,day) => this.onDayClick(e,day)}
                monthIndex={() => this.monthIndex()}
                year={() => this.year()}
                />
            
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
        <div>
         {this.state.btnClicked && this.state.eventname == '' && this.state.eventdesc == '' ?
         <p style={{textAlign:'center',fontFamily:'Trebuchet MS',fontSize:'1.3em',color:'orangered'}}>
             <strong>
             Plz enter data to add...
             </strong></p>
         :null}
       

        </div>
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.state.eventname == '' && this.state.eventdesc == '' ? this.eventEmptyCallHandler :this.addEventDataHandler} >Add Event</Button>{' '}
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
