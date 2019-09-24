// import React,{Component} from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// class Event extends Component{

//     render(){

//         return(
// //             <form>
// // <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //     <div className="modal-dialog" role="document">
// //         <div className="modal-content">
// //             <div className="modal-header">
// //                 <h5 className="modal-title" id="exampleModalLabel">ADD EVENT DATA </h5>
// //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
// //                 <span aria-hidden="true"> &times; </span>
// //                 </button>
// //                 </div>

           
// // <div className="modal-body">
// // <div className="form-group">
// //     <label for="">Enter Name of Event</label>
// //     <input type="text" className="form-control" name="title" placeholder="Enter EventName"/>
// // </div>
// // <div className="form-group">
// //     <label for="">Enter Event Description</label>
// //     <input type="text" className="form-control" name="eventDescription" placeholder="Enter EventDescription"/>
// // </div>
// // </div>

// // <div className="modal-footer">
// // <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
// // <button type="button" className="btn btn-primary">Save Event</button>
// // </div>

// //             </div> 

// //     </div>
// // </div>
// // </form>
// <div>
// <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//   Launch demo modal
// </button>
// <form>
// <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-centered" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div className="modal-body">
//         ...
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
// </form> 
// </div>

//         );
//     }
// }

// export default Event;
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

      return (
      <div>
        <Button color="danger" onClick={this.toggle}>Click me</Button>
        <Modal isOpen={this.state.modal} close={closeBtn}>
          <ModalHeader >ADD EVENT DATA</ModalHeader>
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
            <Button color="primary" onClick={this.toggle}>Add Event</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Event;