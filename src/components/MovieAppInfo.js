import React from "react";
import { Icon } from "semantic-ui-react";

function MovieAppInfo(props) {
	return (
		<div
			className="movieInfo"
			style={{
				backgroundImage: `linear-gradient(to right, rgba(106, 105, 120, 0.86) 150px, rgba(77, 75, 75, 0.84) 100%),
                url(${props.background})`,
			}}
		>
			<div className="mainInfo">
				<img className="mainInfoImg" src={props.poster} alt="movie poster" />
				<div className="info">
					<h1>{props.title}</h1>
					<p>{props.date}</p>
					<p className="tagLine">{props.tagline}</p>
					<h3>Overview</h3>
					<h5 className="plot">{props.overview}</h5>

					<div className="lastInfo">
						<p>
							<Icon name="clock outline" style={{ display: "inline" }}>
								{" "}
								Runtime: {props.runtime} minutes
							</Icon>
						</p>
						<p>
							<Icon name="money bill alternate" style={{ display: "inline" }}>
								{" "}
								Budget: ${props.budget}
							</Icon>
						</p>
						<p>
							<Icon
								name="money bill alternate outline"
								style={{ display: "inline" }}
							>
								{" "}
								Revenue: ${props.revenue}
							</Icon>
						</p>
						<p>
							<Icon name="star" style={{ display: "inline" }}>
								{" "}
								{props.rating}/10
							</Icon>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieAppInfo;
