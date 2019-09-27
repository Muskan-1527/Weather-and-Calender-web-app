import React from 'react';
import Logo from '../Logo/Logo'
import './NavBar.css';
// import NavItems from './NavItems/NavItems';
import {NavLink} from 'react-router-dom';


const navBar = () => (
<div className="NavBar">
    <nav >
    <ul>

    <div><Logo/></div>

                         <li><NavLink
                                to="/"
                                exact={true}
                                activeClassName="is-active link"
                                activeStyle={{
                                    textDecoration: 'underline',
                                    color: 'white',
                                    backgroundColor:'#1f7d4f',
                                    borderBottom: '4px solid #c9b624',
                                }}>Home</NavLink></li>

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
                            }}>Weather</NavLink></li>

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
                            }}>Calendar</NavLink></li>

                    

   {/* <NavItems link="/" active>Home</NavItems>
   <NavItems link="/">Weather</NavItems> */}
    </ul>
    </nav>
    </div>
    );
export default navBar;