import React,{Component} from 'react';
import fire from '../../config/config';
import Calendar_app from '../../calendar_app_component/calendar_app';
import Yearly from '../../calendar_app_component/yearly_calendar/calendar_yearly';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from '../../axios_file';
import moment from 'moment';
import Swal from 'sweetalert2';


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
        eventdetail:'',
        selectedDay: null,
        selectedMonth: null,
        selectedYear: null,
        btnClicked:false,
        showEvent:false
      };
}

 logout(){
     fire.auth().signOut().then((u) => {
         Swal.fire({
             type:"success",
             text: "Successfully logged out"
         })
     }
     );   //user logs out...
 }

 onDayClick = (e,day) => {
    this.setState(prevState => ({
        modal: !prevState.modal    //modal state changes...
      }));

    
    this.setState({
        selectedDay: day,                //current day is set...
        selectedMonth:this.monthIndex(),  //current month index is set...
        selectedYear: this.year(),       //current year is set...
        btnClicked:false,
        showEvent:false
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
    this.state.eventname='';   //data in fields is reset...
    this.state.eventdesc='';
}

 changeHandler(e) {
    this.setState({[e.target.name] : e.target.value});  //fields value changes to entered values...
}

//event data is sent to the database...
eventSendHandler = (e) =>{
    const eventdata = {
        eventName:this.state.eventname,    
        eventDescription:this.state.eventdesc,
        eventDay:this.state.selectedDay+"/"+this.state.selectedMonth+"/"+this.state.selectedYear
    }

    axios.post('/events.json',eventdata).then((u) => {
        Swal.fire({
            type: "success",
            text: "Event successfully added"
        });
    })
    .catch(error => console.log(error));
}

//when add event is clicked without entering data...
eventEmptyCallHandler = () => {
    this.setState({
        btnClicked:true
    })
}

//multiple functions are called
addEventDataHandler = () =>{
        this.eventSendHandler();
        this.onDayClick();
        this.resetData();
    }


showEventHandler = () =>{
      this.setState({
          showEvent:true
      })   
    axios.get('https://my-react-project-eabd0.firebaseio.com/events.json')
    .then(response => {
      
       const database = fire.database();

       var ref = database.ref('events');
        ref.on('value',gotData);
        
        function gotData(data) {
            var events = data.val();
            var keys = Object.keys(events);
           console.log(keys);
            for(var i=0;i<keys.length;i++){
                var k = keys[i];
                var eventName = events[k].eventName;
                var eventDescription = events[k].eventDescription;
                console.log(eventName,eventDescription);
               }
              
            }
            this.setState({eventdetail:response.data});
       console.log(response.data);
    });
}


    render() {

                
            //  {this.state.showEvent ?  :null}
         
        const closeBtn = <button className="close" onClick={this.onDayClick}>&times;</button>
    
        return(
            <div>
                 <div className = "text-center pb-1 pt-2 " style = {{
                    fontSize: "3em"
                }}>CALENDAR</div>
                <Calendar_app style={style}                          //monthly view is rendered...
                onDayClick={(e,day) => this.onDayClick(e,day)}
                monthIndex={() => this.monthIndex()}
                year={() => this.year()}
                />
            
                <div className = "text-center pb-3" style = {{
                    fontSize: "3em"
                                                                 //yearly view is rendered...
                }}>YEARLY VIEW               
                </div>         
                <Yearly />                                           
               <div className = "text-center"> <button onClick={this.logout} className = " my-4 p-2 px-4 text-center btn btn-primary">Logout</button></div>
           
           
            <div>                
        <Modal isOpen={this.state.modal}>
        <ModalHeader close={closeBtn}>{this.state.showEvent ? "THE EVENT DATA IS...":"ADD EVENT DATA"}</ModalHeader>
        <ModalBody>
           
        {this.state.showEvent ? 
        <div className="modal-body">
        <div className="form-group">
        <label for="exampleEvent">Event details</label>
        <input type="text" value={this.state.eventdetail} className="form-control" name="eventdetail" placeholder="Enter EventName"/> 
        </div>
        </div>
        :
        <div>
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
        </div>
        }
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={this.state.eventname == '' && this.state.eventdesc == '' ? this.eventEmptyCallHandler :this.addEventDataHandler} >Add Event</Button>{' '}
        <Button color="warning" onClick={this.showEventHandler}>Show Events</Button>{' '}
        <Button color="secondary" onClick={this.onDayClick}>Close</Button>
        </ModalFooter>
        </Modal>
        </div>
        </div>
        )
            }       //modal is rendered...  
}

export default Calendar; 

