import React,{Component} from 'react';
import img3 from '../images/fb.jpg';
import img4 from '../images/youtube.jpg';
import img5 from '../images/linkedin.jpg';
import img6 from '../images/twitter.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Background.css';
import Weather from '../../weather_app';
import Front_page from '../../front_page';
import { Route,Link } from 'react-router-dom';


const Background = () => {
        return(

          //weather data is displayed...
              <div style={{backgroundColor:"wheat",
              marginTop: "-1rem"
              }}>


           <div className="row">
                <img src="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="weather_image" className="image1"/>
             
            
               <div className = "heading col-md-12 text-center my-auto">
                    <h1 className="head1">WEATHER APP</h1>
                    <h3 className="tagline">Come for the weather,Stay for the experience...</h3>
                    <div className="link1">
                    <h5 className="py-3 font-weight-bold link">Click on the link given below to get the latest WEATHER report</h5>
                    <Link to = "/weather" style = {{ 
                    display:"block",
                    fontSize: "2rem",
                  borderBottom: "6px solid blue"
               }} className="weather_link font-weight-bold"><u>Weather</u></Link>
               <Route path="/weather" component={Weather} />
                    </div>
                    </div>
                </div>


           <div className = "middle">

<div className = "row mt-4 py-4">     
     <div className = "col-md-6 text-center">
    <div className="card">
  <div className="card-body">
  <h1 className = "card-title font-weight-bold" style={{top:"0.2rem", margin: "0",
  position: "relative"}}>Weather Conditions</h1>
    
    <p className="card-text"> 

    <h4>Global coverage</h4>
    <h4>- Forecasts and current conditions</h4>
         <h4>- Weather Report of Next Three Days</h4>
         <h4>- Three Hour Format Weather Report</h4>
         </p>
  </div>
</div>
</div>

<div className = "col-md-6 text-center">
    <div className="card">
  <div className="card-body">
  <h1 className = "card-title font-weight-bold" style={{top:"0.2rem", margin: "0",
  position: "relative"}}>Advanced Data</h1>
    
    <p className="card-text"> 
    <h4>- User friendly</h4>
    <h4>- Easy to Use</h4>
    <h4>- Cutting-edge forecast modeling techniques</h4>
     <h4>- Backed by a wide range of data sources</h4>
         
         </p>
  </div>
</div>
</div>
    </div>

</div>
              {/* calendar data is rendered */}
    
           <div className="row" style = {{backgroundColor:"white"}}>
                <div className = "col-md-6 text-center">
                    <div style={{position:"relative",top:'30%'}}>
                    <h1>CALENDAR APP</h1>                
                    <h3><small>See your past,present and future...</small> </h3>
                    </div>
                </div>

                <div className = "col-md-6 text-center">

               <img src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="weather_image" className="image2"/>
                </div>

                
           </div>

          
<div style={{backgroundColor:"#fffed3"}}>
<hr
             style={{
            backgroundColor: "black",
            height: 2
            }}
             />
           <div className="link1">
           <div className = "row py-4">
           <div className = "col-md-12 text-center">
               <h3 className="px-3 font-weight-bold">Click on the link given below to get the CALENDAR</h3>
               <Link to = "/front_page" style = {{
                   display:"block", 
                   borderBottom: "0px solid white" , 
                  fontSize: "2em",
               }}
               className="weather_link font-weight-bold"><u>Calendar</u></Link>
               <Route path="/front_page" component={Front_page} />
           </div>
           </div>
           </div>
           <div className="row py-4">
           <div className = "col-md-12 text-center calendar_feature">   
           <h3 className = "font-weight-bold">Features:</h3>
                        <h4>- Monthly Calendar View</h4>
                        <h4>- Sundays and festivals are marked with different colors</h4>
                        <h4>- Move right or left in Months</h4>
                        <h4>- Move to present date from any date</h4>
                        <h4>- Months and Year picker</h4>
                        <h4>- Selected day is marked with different color </h4>
           </div>
           </div>
          
          
           {/* footer is rendered */}

           <div className = "footer">

           <div className = "row mt-4 py-4">
               <div className = "col-md-3 text-center">
                   <h2 className = "font-weight-bold">Elements of website</h2>
                   <h6>The Events Calendar</h6>
                   <h6>Events Calendar PRO</h6>
                   <h6>Download</h6>
                   <h6>License</h6>
                   <h6>Demo</h6>
               </div>
               <div className = "col-md-3 text-center">
                    <h2 className = "font-weight-bold">Support</h2>  
                    <h6>Support Overview</h6>
                    <h6>Technical Docs</h6>            
                    <h6>Help Desk</h6>
                    <h6>Knoeledgebaxe</h6>
               </div>
               <div className = "col-md-3 text-center">
                     <h2 className = "font-weight-bold">About Website</h2>  
                     <h6>Contact</h6>
                     <h6>Partner Program</h6>
                     <h6>Privacy Policy</h6>
                     <h6>Web Developers</h6>
                     <h6>Terms of use</h6>
               </div>
           </div>
           <hr
             style={{
            backgroundColor: "#697def",
            height: 2
            }}
             />

             <div className = "row">

                 <div className = "col-md-4">
                 
                 <h4 className = "font-weight-bold"> &copy; 2019 A Modern Tribe Hootenanny  ,  Terms of Service , Privacy , Policy</h4>

                 </div>

                 <div className = "col-md-6 mx-2 text-right">

                   <img src={img3} alt="facebook" width="30px" className = "mx-1" /> 
                   <img src={img4} alt="youtube" width="30px" className = "mx-1"/> 
                   <img src={img5} alt="linkedin" width="30px" className = "mx-1"/>  
                   <img src={img6} alt="twitter" width="30px" className = "mx-1"/> 

                 </div>
             </div>
             <div className = "row text-center">
               <div className = "col-md-12">
                 <h3><u>Contact Us:-</u></h3><h6>Email id - agrawalgupta@gmail.com</h6>
                 <h6>Address - 1 Lane ,ABC Company Ghaziabad , India , 201009</h6>
               </div>
             </div>
           </div>   
           </div>        
           </div>
        );
    }


export default Background;