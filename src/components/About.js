import React from "react";

function About() {
	return <div className="aboutpage">
		<h1>MOVIE SEARCH APP</h1>
		<h2>Idea behind the project</h2>
		<p>
			We decided to create this project because we thought it would represent everything
			we have learnt in these past 5 weeks in this Software Engineering Apprenticeship. 
			This project showcases what we have learnt about React from simple reusable components
			to using APIs.
		</p>
		<h2>API Reference</h2>
		<p>
			The API used for this project is called{" "}
			<a 
			href="https://www.themoviedb.org/"
			target="_blank"
			rel="noopener noreferrer"
			>
			The Movie Database API
			</a>{" "}
			which we have found by having an extensive search on Google.
			The documentation for the TMDB API can be found{" "}
		<a 
			href="https://developers.themoviedb.org/3/getting-started/introduction"
			target="_blank"
			rel="noopener noreferrer"
			>
			here
			</a>{" "}
			and {" "}
			<a 
			href="https://www.themoviedb.org/documentation/api"
			target="_blank"
			rel="noopener noreferrer"
			>
			here
			</a>
			.
		</p>
		<h2>How does it work?</h2>
		<p>
			The functionality of the app is simple. The app provides users with 
			information about the upcoming movies in the UK. It does this by gathering 
			the required information from the TMDB API and returning a list upcoming and 
			popular movies as well as their artwork, ratings and short descriptions.
			
		</p>
		<br />
		<p>
			This app can also take user input in a form of Search and return a specific movie the
			user has searched for. For ease of use we have even included a "Back to Top" button 
			which can take the user back to the top of the page no matter how far they have 
			scrolled.
		</p>
		<br />
		<p>
			There is also the functionality to "Show All" if the user wants to return to 
			the initial list of movies in the Homepage which will clear the search and 
			showcases the original listing.
		</p>
		<br />
		<p>
			Potentially the most eye-catching element on the page is the Carousel which 
			was implemented using a Carousel component from {" "}
			<a 
			href="https://github.com/brainhubeu/react-carousel"
			target="_blank"
			rel="noopener noreferrer"
			>
			brainhubeu GitHub page
			</a>
			. The Carousel rotates every couple of moments to show the upcoming movies 
			to UK and there is a possibility to use the arrows to either go right or left 
			to scroll through the movie list.
		</p>
		<br />
		<h2>Technologies</h2>
		<p>
			The languages as well as libraries that we have used for this project are 
			as follows:
			<ul>
				<li>JavaScript</li>
				<li>React JS</li>
				<li>Sematic UI</li>
				<li>Reach Router</li>
				<li>CSS</li>
				<li>HTML</li>
			</ul>
		</p>
		<h2>What is the Setup?</h2>
		<p>
			To start working on a project, you will need to create a new React app 
			through the terminal by using <code>npm</code> (or you can also use 
			<code>yarn</code>):
		</p>
			<code>
				npx create-react-app my-app <br />
				cd my-app <br />
				npm start <br />
			</code>
			<br />
		<p>
			There are a few dependencies that need to be set up in order for this to 
			work. The first one is Semantic UI:
		</p>
			<code>yarn add semantic-ui-react</code>
			<br />
		<p>
			How and which components and styles from Semantic-UI you include is completely 
			up to you. You can find more information on how to get set up and start using 
			all the components from Semantic-UI {" "}
			<a 
			href="https://react.semantic-ui.com/usage"
			target="_blank"
			rel="noopener noreferrer"
			>
				here
			</a>
			.
		</p>
		<p>
			Another thing that needs to be installed is Reach Router, which is a smart 
			and simple routing utility:{" "}
			</p>
			<code>npm install @reach/router</code>
		<br />
		<p> 
			More information on how to utilise Reach Router and find the tutorials can be 
			found{" "}
			<a
				href="https://reach.tech/router"
				target="_blank"
				rel="noopener noreferrer"
				>
			here
			</a>
			.
		</p>
		
		</div>;
}

export default About;
