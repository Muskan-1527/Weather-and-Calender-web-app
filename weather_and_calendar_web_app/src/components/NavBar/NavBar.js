import React from 'react';
import Logo from '../Logo/Logo'
import './NavBar.css';
// import NavItems from './NavItems/NavItems';
import {NavLink} from 'react-router-dom';


const navBar = () => (
<div className="NavBar">
    <nav>
    <ul>

    <div><Logo/></div>

                         <li><NavLink
                                to="/background/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:'white',
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/weather',
                                activeClassName:"link",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Weather</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/front_page',
                                activeClassName:"link",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Authenticate</NavLink></li>

                            <li><NavLink to={{
                                pathname: '/calendar',
                                activeClassName:"link",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Calendar</NavLink></li>
                        
                    

   {/* <NavItems link="/" active>Home</NavItems>
   <NavItems link="/">Weather</NavItems> */}
    </ul>
    </nav>
    </div>
    );
export default navBar;