import React,{Component} from 'react';
import fire from '../../config/config';
class Calendar extends Component{
constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
}
 logout(){
     fire.auth().signOut();
 }
    render(){
        return(
            <div>
                <h1>Here calendar would be displayed</h1>
                <button onClick={this.logout}>Logout</button>
            </div>

        )
    }
}
export default Calendar;