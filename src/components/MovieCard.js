import React from "react";
import { Icon } from "semantic-ui-react";

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
			<img
				src={props.src}
				alt=""
				style={{
					width: "200px",
					height: "280px",
					borderRadius: "5px",
				}}
			/>
			<hr />
			<h4 style={{ marginTop: "-10px" }}>{props.title}</h4>
			<p style={{ fontStyle: "italic" }}>{props.date}</p>
			<Icon name="star" />
			<span>{props.rating}/10</span>
		</div>
	);
}

export default MovieCard;
