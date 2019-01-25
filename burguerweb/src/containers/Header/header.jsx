import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class HeaderHOC extends Component {
    render() { 
        return ( 
        <div id="header">
        <div>
            <a href="index.html"><img className="logo" src="images/logo.png" width="513" height="84" alt="" title=""/></a>
            <a href="index.html"><img  src="images/waitress.png" width="332" height="205" alt="" title=""/></a>
            <ul className="navigation">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="burger.html">Menu</a>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </div>
    </div> );
    }
}
 
export default HeaderHOC;