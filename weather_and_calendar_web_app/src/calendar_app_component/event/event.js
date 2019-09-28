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
            <Button color="primary" onClick={this.toggle}>Add Event</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Event;