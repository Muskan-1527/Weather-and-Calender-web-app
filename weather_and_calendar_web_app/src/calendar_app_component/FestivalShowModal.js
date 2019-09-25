// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class FestivalModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showfestivalmodal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       shmodal: !prevState.modal
//     }));
//   }

//   render() {
//       const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

//       return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>Festival</Button>
//         <Modal isOpen={this.state.modal}>
//           <ModalHeader close={closeBtn}>Today's Festival</ModalHeader>
//           <ModalBody>
//           <div className="modal-body">
            
//           </div>  

//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Add Event</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Close</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default FestivalModal;