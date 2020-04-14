import React from "react";
import {Link} from "@reach/router";

function NavBar(){
    return (
        <div className = "Nav">
            <Link to = "/"><li>Home</li></Link>
            <Link to = "About"><li>About</li> </Link>
           

        </div>
    )
}