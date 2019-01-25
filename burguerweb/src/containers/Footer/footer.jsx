import React, { Component } from 'react';

class FooterHOC extends Component {
    render() { 
        return ( 
            <div id="footer">
		<div>
			<ul>
				<li className="first">
					<h2>Delivery Hotline</h2>
					<h3>Call 0-123-456-789</h3>
					<ul>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/facebook" className="facebook"></a>
						</li>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/twitter" className="twitter"></a>
						</li>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/googleplus" className="googleplus"></a>
						</li>
					</ul>
				</li>
				<li>
					<a href="index.html"><img className="logo" src="images/logo-footer.png" alt=""/></a>
					<ul className="navigation">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="about.html">About Us</a>
						</li>
						<li>
							<a href="menu.html">Menu</a>
						</li>
						<li>
							<a href="contact.html">Contact Us</a>
						</li>
					</ul>
					<span>&copy; 2023 RetroDiner.com. All Rights Reserved</span>
				</li>
				<li className="last">
					<h2>Follow Us By Email</h2>
					<form action="index.html">
						<input type="text" name="subscribe" value="Enter Your Email Here..."readOnly/>
						<input type="submit" value=""/>
					</form>
				</li>
			</ul>
		</div>
	</div>

         );
    }
}
 
export default FooterHOC;