import React from 'react';

import classes from './NavBar.css';
import NavItems from './NavItems/NavItems';

const navBar = () => (
    <ul className={classes.NavBar}>
   <NavItems link="/" active>FAQ</NavItems>
   <NavItems link="/">About</NavItems>
    </ul>
    );
export default navBar;