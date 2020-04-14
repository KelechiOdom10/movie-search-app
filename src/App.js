import React, { useEffect } from "react";
import "./App.css";
import { Card, Icon, Image, Input, Button } from "semantic-ui-react";

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

	const movies = filterMovie.map(result => {
		return (
			<Card>
				<Image
					src={`${IMAGE_URL}w300${result.poster_path}`}
					wrapped
					ui={false}
					size="small"
					fluid
				/>
				<Card.Content>
					<Card.Header>{result.original_title}</Card.Header>
					<Card.Meta>
						<span className="date">{result.release_date}</span>
					</Card.Meta>
					{/* <Card.Description>{result.overview}</Card.Description> */}
				</Card.Content>
				<Card.Content extra>
					<a href="">
						<Icon name="star" />
						{result.vote_average}/10
					</a>
				</Card.Content>
			</Card>
		);
	});

	return (
		<div className="App">
			<div>
				<Input
					placeholder="Search..."
					onChange={handleSearch}
					value={typedMovie}
				/>
				<Button content="Search" onClick={typedToSearch} />
				<Button content="Show All" onClick={reset} />
			</div>
			{popularMovies ? movies : <p>Loading..</p>}
		</div>
	);
}

export default App;
