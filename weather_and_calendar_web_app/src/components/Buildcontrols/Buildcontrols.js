import React,{Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Background from '../Background/Background';
import { Route,Switch } from 'react-router-dom';
import Weather from '../../weather_app';
import Front_page from '../../front_page';
import Calendar from '../Calendar/Calendar';


class Buildcontrols extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     display:true
        // }
    }
// backgroundShow = () =>{
//     if(display){

//     }
// }
    

    render(){
        return(
            <div>
<NavBar/>
{/* <Background/> */}
<Switch>
                    <Route path="/background" component={Background} />
                    <Route path="/weather" component={Weather} />
                    <Route path="/front_page" component={Front_page} />
                    <Route path="/calendar" component={Calendar} />
                </Switch>
</div>
        );
    }
}

export default Buildcontrols;