import React from 'react';
import Logo from '../Logo/Logo'
import classes from './NavBar.css';
// import NavItems from './NavItems/NavItems';
import {NavLink} from 'react-router-dom';


const navBar = () => (
<div className={classes.NavBar}>
    <nav >
    <ul>

    <div><Logo/></div>

                         {/* Home page link */}
                         <li><NavLink
                                to="/"
                                exact={true}
                                activeClassName="is-active link"
                                activeStyle={{
                                    textDecoration: 'underline',
                                    color: 'white',
                                    backgroundColor:'#1f7d4f',
                                    borderBottom: '4px solid #c9b624',
                                    fontWeight:'bold',
                                    fontSize:'1em'
                                }}>Home</NavLink></li>

                            {/* Link to the weather page */}
                            <li><NavLink to={{
                                pathname: '/weather',
                                activeClassName:"link",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                            activeStyle={{
                                textDecoration: 'underline',
                                color: 'white',
                                backgroundColor:'#1f7d4f',
                                borderBottom: '4px solid #c9b624',
                                fontWeight:'bold'
                            }}>Weather</NavLink></li>

                            {/* link to the calendar page */}
                            <li><NavLink to={{
                                pathname: '/front_page',
                                activeClassName:"link",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                            activeStyle={{
                                textDecoration: 'underline',
                                color: 'white',
                                backgroundColor:'#1f7d4f',
                                borderBottom: '4px solid #c9b624',
                                fontWeight:'bold',
                            }}>Calendar</NavLink></li>

    </ul>
    </nav>
    </div>
    );
export default navBar;