import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Event extends Component{

    render(){

        return(

<div class="modal fade" tabindex="-1" role="dialog" aria-labeledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">ADD EVENT DATA </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"> &times; </span>
                </button>
                </div>

                <form>
<div class="modal-body">
<div class="form-group">
    <label for="">Enter Name of Event</label>
    <input type="text" class="form-control" name="title" placeholder="Enter EventName"/>
</div>
<div class="form-group">
    <label for="">Enter Event Description</label>
    <input type="text" class="form-control" name="eventDescription" placeholder="Enter EventDescription"/>
</div>
</div>

<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save Event</button>
</div>
</form>
            </div> 

    </div>
</div>
        );
    }
}

export default Event;