import React from 'react';
import Logo from '../Logo/Logo'
import classes from './NavBar.css';
import NavItems from './NavItems/NavItems';

const navBar = () => (
    <ul className={classes.NavBar}>
    <div><Logo/></div>
   <NavItems link="/" active>FAQ</NavItems>
   <NavItems link="/">About</NavItems>
    </ul>
    );
export default navBar;