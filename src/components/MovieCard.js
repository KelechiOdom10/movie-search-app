import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function MovieCard(props) {
	return (
		<Card>
			<Image src={props.src} wrapped ui={false} size="small" fluid />
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>
					<span className="date">{props.date}</span>
				</Card.Meta>
				{/* <Card.Description>{props.overview}</Card.Description> */}
			</Card.Content>
			<Card.Content extra>
				<a href="">
					<Icon name="star" />
					{props.rating}/10
				</a>
			</Card.Content>
		</Card>
	);
}

export default MovieCard;
