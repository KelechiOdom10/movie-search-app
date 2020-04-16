import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import MovieAppInfo from "./MovieAppInfo";

const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

function MovieDetailPage(props) {
	const [movieDetails, setMovieDetails] = React.useState([]);

	useEffect(() => {
		fetch(`${API_URL}movie/${props.movieId}?api_key=${API_KEY}&language=en-UK&`)
			.then(response => response.json())
			.then(response => {
				setMovieDetails([response]);
				console.log(response);
			});
	}, []);

	console.log("Logging out movie details", movieDetails);

	const movieDetail = movieDetails.map(result => {
		return (
			<MovieAppInfo
				background={`${IMAGE_URL}w1280${result.backdrop_path}`}
				poster={`${IMAGE_URL}w342${result.poster_path}`}
				title={result.original_title}
				tagline={result.tagline}
				overview={result.overview}
				runtime={result.runtime}
				budget={result.budget}
				revenue={result.revenue}
				rating={result.vote_average}
			/>
		);
	});

	return <div>{movieDetail}</div>;
}
export default MovieDetailPage;
