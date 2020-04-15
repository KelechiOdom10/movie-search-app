import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Home path="/" />
				<Contact path="contact" />
				<About path="about" />
			</Router>
		</div>
	);
}

export default App;
