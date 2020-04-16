import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import "./App.css";
import MovieDetailPage from "./components/MovieDetailPage";

function App() {
	return (
		<div>
			<NavBar />
			<Router>
				<Home path="/" />
				<Contact path="contact" />
				<About path="about" />
				<MovieDetailPage path="movies/:movieId" />
			</Router>
		</div>
	);
}

export default App;
