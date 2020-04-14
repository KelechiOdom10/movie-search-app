import React, { useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { Carousel } from "react-bootstrap";

const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

function App() {
	const [popularMovies, setPopularMovies] = React.useState([]);
	const [searchMovies, setSearchMovies] = React.useState("");
	const [typedMovie, setTypedMovie] = React.useState("");

	const handleSearch = e => {
		setTypedMovie(e.target.value);
	};

	const typedToSearch = () => {
		setSearchMovies(typedMovie);
	};

	const reset = () => {
		setSearchMovies("");
		setTypedMovie("");
	};

	useEffect(() => {
		fetch(
			`${API_URL}movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-UK&page=1`
		)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				setPopularMovies(response.results);
			});
	}, []);

	const filterMovie = popularMovies.filter(item => {
		return searchMovies !== ""
			? item.original_title.toLowerCase().includes(searchMovies.toLowerCase())
			: item;
	});

	const movies = filterMovie.map(result => {
		return (
			<MovieCard
				src={`${IMAGE_URL}w300${result.poster_path}`}
				title={result.original_title}
				date={result.release_date}
				overview={result.overview}
				rating={result.vote_average}
			/>
		);
	});

	return (
		<div className="App">
			<Carousel style={{ width: "300px" }}>
				<Carousel.Item style={{ width: "auto" }}>
					<img
						className="d-block w-100"
						src="https://image.tmdb.org/t/p/w300/4AeGz1Jwnq6ky2kfLT95Tm8nEiw.jpg"
						alt="First slide"
						style={{
							height: "400px",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							width: "50%",
							objectFit: "contain",
							objectPosition: "50% 50%",
						}}
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://image.tmdb.org/t/p/w300/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
						alt="First slide"
						style={{
							height: "400px",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							width: "50%",
							objectFit: "contain",
							objectPosition: "50% 50%",
						}}
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://image.tmdb.org/t/p/w300/db32LaOibwEliAmSL2jjDF6oDdj.jpg"
						alt="First slide"
						style={{
							height: "400px",
							display: "block",
							marginLeft: "auto",
							marginRight: "auto",
							width: "50%",
							objectFit: "contain",
							objectPosition: "50% 50%",
						}}
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Search
				onChange={handleSearch}
				value={typedMovie}
				searchClick={typedToSearch}
				showAllClick={reset}
			/>
			<div className="movieGrid">
				{popularMovies ? movies : <p>Loading..</p>}
			</div>
		</div>
	);
}

export default App;
