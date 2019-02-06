import React, { Component } from 'react';

class HomeHOC extends Component {

    render() { 
		const pStyle = {
			fontSize: '15px',
			textAlign: 'center',
			width :'960px',
			overflow : 'hidden',
			marginBottom :0,
		  };
        return ( 

				<div id="body">
					<div className="featured" style={pStyle}> <a href="burger.html"><img src="images/burger-specials.png" width="960" height="590" alt="" /></a>
						<h2>Welcome to Retro Diner!</h2>
						<p>
							This website template has been designed by <a href="http://www.freewebsitetemplates.com"> Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums"> Forums.</a>
						</p>
						<ul>
							<li>
								<a style={{border: '0'}} href="hotdog.html"><img src="images/hotdogs.jpg" width="284" height="214" alt=""/></a>
							</li>
							<li>
								<a style={{border: '0'}} href="shake.html"><img src="images/shakes.jpg" alt="" width="284" height="214"/></a>
							</li>
							<li>
								<a style={{border: '0'}} href="breakfast.html"><img src="images/breakfast.jpg" alt="" width="284" height="214"/></a>
							</li>
						</ul>
					</div>
				</div>
     );
    }
}
 
export default HomeHOC;