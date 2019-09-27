import React,{Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Background from '../Background/Background';
import { Route,Switch } from 'react-router-dom';
import Weather from '../../weather_app';
import Front_page from '../../front_page';

class Buildcontrols extends Component{
    render(){
        return(
            <div>
<NavBar/>
<Switch> 
                    {/* Route to the home page */}
                    <Route path="/background" component={Background} />
                    {/* Route to the weather page */}
                    <Route path="/weather" component={Weather} />
                    {/* Route to the weather page */}
                    <Route path="/front_page" component={Front_page} />
                    {/* Route to the home page */}
                    <Route path="" component={Background} />
                </Switch>
</div>
        );
    }
}

export default Buildcontrols;