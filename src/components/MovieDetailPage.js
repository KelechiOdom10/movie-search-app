import React, { useEffect } from "react";
import MovieAppInfo from "./MovieAppInfo";
import ActorCard from "./ActorCard";

const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

function MovieDetailPage(props) {
	const [movieDetails, setMovieDetails] = React.useState([]);
	const [movieActors, setMovieActors] = React.useState([]);
	const movie_id = `${props.movieId}`;

	useEffect(() => {
		Promise.all([
			fetch(`${API_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-UK&`),
			fetch(
				`${API_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-UK&`
			),
		])
			.then(response => Promise.all(response.map(response => response.json())))
			.then(responseArr => {
				setMovieDetails([responseArr[0]]);
				setMovieActors(responseArr[1].cast);
				console.log(movieDetails);
				console.log(movieActors);
			});
	}, []);

	const movieDetail = movieDetails.map((result, index) => {
		const movieRevenue = result.revenue.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		const movieBudget = result.budget.toLocaleString(navigator.language, {
			minimumFractionDigits: 0,
		});
		return (
			<MovieAppInfo
				key={index}
				background={`${IMAGE_URL}w1280${result.backdrop_path}`}
				poster={`${IMAGE_URL}w342${result.poster_path}`}
				title={result.original_title}
				tagline={result.tagline}
				overview={result.overview}
				date={result.release_date}
				runtime={result.runtime}
				budget={movieBudget}
				revenue={movieRevenue}
				rating={result.vote_average}
			/>
		);
	});

	const movieActor = movieActors.map((result, index) => {
		return (
			<ActorCard
				key={index}
				image={`${IMAGE_URL}w342${result.profile_path}`}
				actor={result.name}
				character={result.character}
			/>
		);
	});

	return (
		<div>
			{movieDetail}
			<div className="actors">{movieActor}</div>
		</div>
	);
}
export default MovieDetailPage;
