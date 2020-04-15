import React, { useEffect } from "react";
import Search from "./Search";
import MovieCard from "./MovieCard";
import CarouselSlider from "./CarouselSlider";
import Button from "./Button";

const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

function Home() {
	const [upcomingMovies, setUpcomingMovies] = React.useState([]);
	const [popularMovies, setPopularMovies] = React.useState([]);
	const [searchMovies, setSearchMovies] = React.useState("");
	const [typedMovie, setTypedMovie] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(0);

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

	const handleLoadMore = () => {
		fetch(
			`${API_URL}discover/movie?api_key=${API_KEY}&language=en-UK&sort_by=popularity.desc&page=${
				currentPage + 1
			}`
		)
			.then(response => response.json())
			.then(response => {
				setPopularMovies([...popularMovies, ...response.results]);
				setCurrentPage(response.page);
			});
	};

	useEffect(() => {
		Promise.all([
			fetch(
				`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-UK&page=1`
			),
			fetch(
				`${API_URL}discover/movie?api_key=${API_KEY}&language=en-UK&sort_by=popularity.desc&page=1`
			),
		])
			.then(response => Promise.all(response.map(response => response.json())))
			.then(responseArr => {
				console.log(responseArr);
				setUpcomingMovies(responseArr[0].results);
				setPopularMovies(responseArr[1].results);
				setCurrentPage(responseArr[1].page);
			});
	}, []);

	const filterMovie = popularMovies.filter(item => {
		return searchMovies !== ""
			? item.original_title.toLowerCase().includes(searchMovies.toLowerCase())
			: item;
	});

	const upcomingMoviesImages = upcomingMovies.map(imageResult => {
		return <img src={`${IMAGE_URL}w185${imageResult.poster_path}`} alt="" />;
	});

	const movies = filterMovie.map(result => {
		return (
			<MovieCard
				path={`movies/${result.id}`}
				src={`${IMAGE_URL}w300${result.poster_path}`}
				title={result.original_title}
				date={result.release_date}
				overview={result.overview}
				rating={result.vote_average}
				link={`https://themoviedb.org/movie/${result.id}-${result.original_title}?api_key=${API_KEY}`}
			/>
		);
	});

	return (
		<div className="App">
			<CarouselSlider images={upcomingMoviesImages} />
			<Search
				onChange={handleSearch}
				value={typedMovie}
				searchClick={typedToSearch}
				showAllClick={reset}
			/>
			<div className="movieGrid">
				{upcomingMovies ? movies : <p>Loading..</p>}
			</div>
			<Button
				content="Load More"
				onClick={handleLoadMore}
				style={{ margin: "1em" }}
			/>
		</div>
	);
}

export default Home;
