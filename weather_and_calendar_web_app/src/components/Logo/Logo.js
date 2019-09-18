import React from 'react';
import weatherLogo from '../images/logo1.jpg';
import './Logo.css';
const logo = (props) => (
   <div className="Logo">
<img src={weatherLogo} alt="MyWeatherLogo"/>
   </div>
    );
export default logo;