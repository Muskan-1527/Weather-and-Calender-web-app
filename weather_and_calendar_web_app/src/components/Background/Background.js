import React,{Component} from 'react';
import img1 from '../images/climate.gif';
import img2 from '../images/calendar.jpg';
import img3 from '../images/fb.jpg';
import img4 from '../images/youtube.jpg';
import img5 from '../images/linkedin.jpg';
import img6 from '../images/twitter.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Background.css';
import Weather from '../../weather_app';
import Front_page from '../../front_page';
import { Route,Link } from 'react-router-dom';

// import Content from '../Content/Content';

class Background extends Component{
    render(){
        return(
              <div style={{right:"0px",backgroundColor:"peru"}}>

           <div className="row h-100">
               <img src={img1} alt="weather_image" className="image1"/>
               <div className = "heading col-md-12 text-center my-auto">
                    <h1 className="head1"><u>WEATHER APP</u></h1>
                    <h3 className="tagline">Come for the weather,Stay for the experience...</h3>
                    </div>

                </div>
                
                
           <div className = "row py-4">
               <div className = "col-md-12 text-center">
               <h3 className="px-3 font-weight-bold">Click on the link given below to get the latest WEATHER report</h3>
               <Link to = "/weather" style = {{ 
                    display:"block",
                  borderBottom: "1px solid white" , 
                  fontSize: "2em"
               }}>Weather</Link>
               <Route path="/weather" component={Weather} />
           </div>
           </div>
           <div className = "middle">
<div>
<div className = "row mt-4 py-4">
    <div className = "col col-lg-2 text-center">
        <div className="weather_feature">

        <h1 className = "font-weight-bold" style={{top:"25%", margin: "0",
  position: "relative"}}>Features</h1>
        </div>
        
    </div>
    <div className = "col-md-auto text-center">
         
         <h4>- Current Weather Report</h4>
         <h4>- Weather Report of Next Three Days</h4>
         <h4>- Three Hour Format Weather Report</h4>
    </div>
    </div>
    </div>
</div>


           <div className="row">
                <div className = "col-md-6 text-center">
                    <h1><u>CALENDAR APP</u></h1>
                    <h3>This app gives the Calendar </h3>
                    <h3 className = "font-weight-bold">Features:</h3>
                        <h4>- Monthly Calendar View</h4>
                        <h4>- Sundays and festivals are marked with different colors</h4>
                        <h4>- Move right or left in Months</h4>
                        <h4>- Move to present date from any date</h4>
                        <h4>- Months and Year picker</h4>
                        <h4>- Selected day is marked with different color </h4>
                </div>

                <div className="col-md-6">
               <img src={img2} alt="weather_image" className="image1"/>
                </div>


           </div>
           <div className = "row py-4">
           <div className = "col-md-12 text-center">
               <h3 className="px-3 font-weight-bold">Click on the link given below to get the CALENDAR</h3>
               <Link to = "/front_page" style = {{
                   display:"block", 
                   borderBottom: "0px solid white" , 
                  fontSize: "2em",
               }}>Calendar</Link>
               <Route path="/front_page" component={Front_page} />
           </div>

           </div>

           

           <div className = "footer">

           <div className = "row mt-4 py-4">
               <div className = "col-md-3 text-center">
                   <h2 className = "font-weight-bold">Shopify Community</h2>
                   <h6>Feedback On My Store</h6>
                   <h6>Payments, Shipping and Fulfillment</h6>
                   <h6>Shopify Themes</h6>
                   <h6>API and SDK</h6>
                   <h6>Marketing</h6>
               </div>
               <div className = "col-md-3 text-center">
                    <h2 className = "font-weight-bold">Support</h2>  
                    <h6>24/7 Support</h6>
                    <h6>Shopify Help Center</h6>            
                    <h6>API documentation</h6>
                    <h6>Free Tools</h6>
               </div>
               <div className = "col-md-3 text-center">
                     <h2 className = "font-weight-bold">Shopify</h2>  
                     <h6>Contact</h6>
                     <h6>Partner Program</h6>
                     <h6>Affiliate Program</h6>
                     <h6>App Developers</h6>
                     <h6>Investors</h6>
               </div>
           </div>
           <hr
             style={{
            backgroundColor: "#697def",
            height: 2
            }}
             />

             <div className = "row">

                 <div className = "col-md-5">
                 
                 <h4 className = "font-weight-bold">Terms of Service , Privacy , Policy</h4>

                 </div>

                 <div className = "col-md-6 mx-2 text-right">

                   <img src={img3} alt="facebook" width="30px" className = "mx-1" /> 
                   <img src={img4} alt="youtube" width="30px" className = "mx-1"/> 
                   <img src={img5} alt="linkedin" width="30px" className = "mx-1"/>  
                   <img src={img6} alt="twitter" width="30px" className = "mx-1"/> 

                 </div>
             </div>
           </div>   
           </div>        

        );
    }
}

export default Background;