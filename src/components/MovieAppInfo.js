import React from "react";
import { Icon } from "semantic-ui-react";

function MovieAppInfo(props) {
	return (
		<div
			className="movieInfo"
			style={{
				backgroundImage: `linear-gradient(to right, rgba(106, 105, 120, 0.86) 150px, rgba(134, 132, 132, 0.79) 100%),
                url(${props.background})`,
			}}
		>
			<div className="mainInfo">
				<img
					src={props.poster}
					style={{
						height: "35vh",
						borderRadius: "5px",
					}}
				/>
				<div>
					<h3>{props.title}</h3>
					<h5>{props.tagline}</h5>
					<p>{props.overview}</p>
					<p>{props.date}</p>
					<p>{props.runtime} minutes</p>
					<p>{props.budget}</p>
					<p>{props.revenue}</p>
					<Icon name="star">{props.rating}/10</Icon>
				</div>
			</div>
		</div>
	);
}

export default MovieAppInfo;
