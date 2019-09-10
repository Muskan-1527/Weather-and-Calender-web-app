import React,{Component} from 'react';
import img1 from '../images/giphy.gif';
import img2 from '../images/calendar.jpg';
import classes from './Buildcontrols.css';



class Buildcontrols extends Component{
    render(){
        return(
            <div className={classes.begin}>


   <div className={classes.image1} > <img src={img1} alt="weather_image"/ ></div>
   <div className={classes.image2}> <img src={img2} alt="calendar_image"/></div>
</div>
        );
    }
}

export default Buildcontrols;