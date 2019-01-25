import React, { Component } from 'react';

class HomeHOC extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
				<div id="body">
					<div className="featured"> <a href="burger.html"><img src="images/burger-specials.png" width="960" height="590" alt="" />></a>
						<h2>Welcome to Retro Diner!</h2>
						<p>
							This website template has been designed by <a href="http://www.freewebsitetemplates.com"> Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums"> Forums.</a>
						</p>
						<ul>
							<li>
								<a href="hotdog.html"><img src="images/hotdogs.jpg" width="284" height="214" alt=""/></a>
							</li>
							<li>
								<a href="shake.html"><img src="images/shakes.jpg" alt="" width="284" height="214"/></a>
							</li>
							<li>
								<a href="breakfast.html"><img src="images/breakfast.jpg" alt="" width="284" height="214"/></a>
							</li>
						</ul>
					</div>
				</div>
				<div id="footer">
		<div>
			<ul>
				<li className="first">
					<h2>Delivery Hotline</h2>
					<h3>Call 0-123-456-789</h3>
					<ul>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/facebook" className="facebook"/>
						</li>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/twitter" className="twitter"/>
						</li>
						<li>
							<a href="http://www.freewebsitetemplates.com/go/googleplus" className="googleplus"/>
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
						<input type="text" name="subscribe" value="Enter Your Email Here..."/>
						<input type="submit" value=""/>
					</form>
				</li>
			</ul>
		</div>
	</div>
			</div>
     );
    }
}
 
export default HomeHOC;