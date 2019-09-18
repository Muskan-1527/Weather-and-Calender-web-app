import React from 'react';
import weatherLogo from '../images/logo1.jpg';
import classes from './Logo.css';
const logo = (props) => (
   <div className={classes.Logo}>
<img src={weatherLogo} alt="MyWeatherLogo"/>
   </div>
    );
export default logo;