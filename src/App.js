import React, { useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselSlider from "./components/CarouselSlider";

const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
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
		fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-UK&page=1`)
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

	const popMoviesImages = popularMovies.map(imageResult => {
		return <img src={`${IMAGE_URL}w185${imageResult.poster_path}`} />;
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
			<CarouselSlider images={popMoviesImages} />
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
