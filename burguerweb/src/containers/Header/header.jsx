import React, { Component } from 'react';

class HeaderHOC extends Component {
    state = {  }
    render() { 
        return ( 
        <div id="header">
        <div>
            <a href="index.html"><img className="logo" src="images/logo.png" width="513" height="84" alt="" title=""/></a>
            <a href="index.html"><img  src="images/waitress.png" width="332" height="205" alt="" title=""/></a>
            <ul className="navigation">
                <li>
                    <a className="active" href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="burger.html">Menu</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
            </ul>
        </div>
    </div> );
    }
}
 
export default HeaderHOC;