import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import "./App.css";
import MovieDetailPage from "./components/MovieDetailPage";
import BackToTop from "react-back-to-top-button";
import arrow from "./Logo_copy.png";

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
			<BackToTop
				showOnScrollDown
				showAt={50}
				speed={1500}
				easing="easeInOutQuint"
			>
				<button className="myBtn">
					<img alt="arrow_up" src={arrow}></img>
				</button>
			</BackToTop>
		</div>
	);
}

export default App;
