import React from 'react';

import classes from './NavItems.css';
const navItems = (props) => (

        <li className={classes.NavItems}>
            <a 
            href={props.link}
           className={props.active ? classes.active : null} >{props.children}</a></li>
    
    );

    export default navItems;