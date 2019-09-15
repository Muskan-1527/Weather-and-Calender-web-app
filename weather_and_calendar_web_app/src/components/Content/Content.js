import React from 'react';
import classes from './Content.css';
const content = (props) =>(
<div>

   <section className={classes.Matter}> 
   <div className="container">
       <div className="row">
           <div className="col-xs-12">
           <h1 className={classes.Content}>Weather App</h1>

           
           </div>
       </div>
       <div className="row">
           <div className="col-xs-12">
          
           <h3 className={classes.Tagline}>Come for the weather,Stay for the experience...</h3>
           
           </div>
       </div>
       <div className="row">
           <div className="col-xs-12">
           <h1 className={classes.Calendar}>Welcome to Calendar</h1>
           
           
           </div>
       </div>

       </div>
   </section>
  
</div>
);
export default content;