import React,{Component} from 'react';
import img1 from '../images/climate.gif';
// import img2 from '../images/calendar.jpg';
import './Background.css';
import Content from '../Content/Content';
import Event from '../../calendar_app_component/event/event';


class Background extends Component{
    render(){
        return(   
            <div>       
  <section>
   <Content/>
   </section>
       <div className="container">
           <div className="row">
               <div className="col-xs-12">
               <img src={img1} alt="weather_image" className="image1"/>
               
                </div>
           </div>
           {/* <div className="row">
               <div className="col-xs-12">
               <img src={img2} alt="calendar_image" className="image2"/></div>
                </div>
           </div> */}
           <Event/>
</div>
</div>
        );
    }
}

export default Background;