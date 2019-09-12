import React,{Component} from 'react';
import img1 from '../images/climate.gif';
import img2 from '../images/calendar.jpg';
import classes from './Buildcontrols.css';
import Content from '../Content/Content';


class Buildcontrols extends Component{
    render(){
        return(
            <div className={classes.begin}>


   <div>
       <Content/>
       <span>
       <img src={img1} alt="weather_image" className={classes.image1}/>
       </span>
   
   </div>
   <div > <img src={img2} alt="calendar_image" className={classes.image2}/></div>
</div>
        );
    }
}

export default Buildcontrols;