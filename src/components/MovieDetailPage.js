import React, { useEffect } from "react";

const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

function MovieDetailPage(props) {
	const [movie, setMovie] = React.useState([]);

	useEffect(() => {
		fetch(`${API_URL}movie/${props.movieId}?api_key=${API_KEY}&language=en-UK&`)
			.then(response => response.json())
			.then(response => {
				setMovie(response);
				console.log(response);
			});
	}, []);

	return <div className="App"></div>;
}
export default MovieDetailPage;
