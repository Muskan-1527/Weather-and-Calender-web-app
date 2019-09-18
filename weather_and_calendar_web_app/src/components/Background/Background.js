import React,{Component} from 'react';
import img1 from '../images/climate.gif';
import img2 from '../images/calendar.jpg';
import classes from '../Background/Background.css';
import Content from '../Content/Content';

class Background extends Component{
    render(){
        return(
            
            <div className={classes.begin}>
  <section>
   <Content/>
   </section>
       <div className="container">
           <div className="row">
               <div className="col-xs-12">
               <img src={img1} alt="weather_image" className={classes.img1}/>
               
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

export default Background;