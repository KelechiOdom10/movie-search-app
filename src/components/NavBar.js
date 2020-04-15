import React from "react";
import {Link} from "@reach/router";

function NavBar(){
    return (
        <div className="nav">
			<Link to="/" style={{ color: "black" }}>
				<img src="./assets/default.svg" alt="" style={{ width: "21vw" }} />
				
			</Link>
			<ul className="nav-links">
				<Link to="/" style={{ color: "black" }}>
					<li>Home</li>
				</Link>
				<Link to="about" style={{ color: "black" }}>
					<li className="li-1">About</li>
				</Link>
				<Link to="contact" style={{ color: "black" }}>
					<li>Contact</li>
				</Link>
			</ul>
		</div>
    )     
}

export default NavBar