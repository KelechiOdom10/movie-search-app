import React from "react";
import { Link } from "@reach/router";

function NavBar() {
	return (
		<div className="nav">
			<Link to="/">
				<img src="./assets/movieicon1.svg" alt="" style={{ height: "6vh" }} />
			</Link>
			<ul className="nav-links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="about">
					<li className="li-1">About</li>
				</Link>
				<Link to="contact">
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
