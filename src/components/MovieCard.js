import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

function MovieCard(props) {
	return (
		<div
			style={{
				border: "0px solid white",
				maxWidth: "200px",
				borderRadius: "5px",
				margin: "10px",
				background: "#021822",
			}}
		>
			<Link to={props.path} style={{ textDecoration: "none", color: "white" }}>
				<img
					src={props.src}
					alt=""
					style={{
						width: "200px",
						height: "280px",
						borderRadius: "5px",
					}}
				/>
			</Link>
			<Link to={props.path} style={{ textDecoration: "none", color: "white" }}>
				<h4 style={{ marginTop: "-5x" }}>{props.title}</h4>

				<p style={{ fontStyle: "italic" }}>{props.date}</p>
				<Icon name="star" />
				<span>{props.rating}/10</span>
			</Link>
		</div>
	);
}

export default MovieCard;
