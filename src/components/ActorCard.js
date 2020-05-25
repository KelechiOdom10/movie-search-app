import React from "react";
import picture from "../default.jpg";

function ActorCard(props) {
	const [imagePath, setImagePath] = React.useState(`${props.image}`);

	const fallBackPath = () => {
		setImagePath(picture);
	};

	return (
		<div className="main-card">
			<img
				className="image"
				src={imagePath}
				alt="Actor images"
				onError={fallBackPath}
			/>
			<div className="lower-card">
				<h2>{props.actor}</h2>
				<h5>{props.character}</h5>
			</div>
		</div>
	);
}

export default ActorCard;
