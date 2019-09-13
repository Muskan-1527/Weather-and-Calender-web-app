import React,{Component} from 'react';
import img1 from '../images/climate.gif';
import img2 from '../images/calendar.jpg';
import classes from './Buildcontrols.css';
import Content from '../Content/Content';
import NavBar from '../NavBar/NavBar';

class Buildcontrols extends Component{
    render(){
        return(
            
            <div className={classes.begin}>
<NavBar/>
  <section>
   <Content/>
   </section>
       <div className="container">
           <div className="row">
               <div className="col-xs-12">
               <img src={img1} alt="weather_image" className={classes.image1}/>
               
                </div>
           </div>
           <div className="row">
               <div className="col-xs-12">
               <img src={img2} alt="calendar_image" className={classes.image2}/></div>
                </div>
           </div>
   
   
</div>
        );
    }
}

export default Buildcontrols;