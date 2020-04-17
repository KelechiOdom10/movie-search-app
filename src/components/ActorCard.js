import React from "react";

function ActorCard(props) {
	return (
		<div className="main-card">
			<img className="image" src={props.image} />
			<div className="lower-card">
				<h2>{props.actor}</h2>
				<h5>{props.character}</h5>
			</div>
		</div>
	);
}

export default ActorCard;
