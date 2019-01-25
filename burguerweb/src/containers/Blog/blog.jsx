import React, { Component } from 'react';

class BlogHOC extends Component {
    render() { 
        return ( 
<div id="body">
		<div id="section">
			<div className="section">
				<div>
					<div> <a href=""><img src="images/breakfast3.jpg" width="169" height="163" alt=""/></a>
						<h2><a href="">All YOU CAN EAT</a></h2>
						<h3>Posted by <a href="#">Sheila</a> in</h3>
						<a href=""><span>Promos,</span></a> <a href=""><span>Weekends,</span></a> <a href=""><span>Breakfast</span></a>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
						</p>
						<a href="" className="price">Jan <span>31st</span></a> </div>
				</div>
			</div>
			<div className="section">
				<div>
					<div> <a href=""><img src="images/shakes2.jpg" width="169" height="163" alt=""/></a>
						<h2><a href="">love day</a></h2>
						<h3>Posted by Sheila in</h3>
						<a href=""><span>Promos,</span></a> <a href=""><span>Weekends,</span></a> <a href=""><span>Breakfast</span></a>
						<p>
							This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
						</p>
						<a href="" className="price">Feb <span>1st</span></a> </div>
				</div>
			</div>
		</div>
		<div className="sidebar">
			<h1>Recent Posts</h1>
			<ul>
				<li className="first">
					<a href="">All You Can Eat Breakfast Everyday</a>
				</li>
				<li>
					<a href="">Love Day Buy 2 Large Shakes Get 1 Free</a>
				</li>
				<li>
					<a href="">Super Duper Burger New Year With Free Extra Topping</a>
				</li>
				<li>
					<a href="">Free Membership Card From Star Roller Skates</a>
				</li>
				<li>
					<a href="">Free Retro Diner Tumbler For Every Burger Special Order</a>
				</li>
			</ul>
			<h1>Categories</h1>
			<ul>
				<li className="first">
					<a href="">Promos</a>
				</li>
				<li>
					<a href="">Weekends</a>
				</li>
				<li>
					<a href="">Breakfast</a>
				</li>
				<li>
					<a href="">Events</a>
				</li>
				<li>
					<a href="">Valentines</a>
				</li>
				<li>
					<a href="">Christmas</a>
				</li>
				<li className="last">
					<a href="">2023</a>
				</li>
			</ul>
		</div>
	</div>


         );
    }
}
 
export default BlogHOC;