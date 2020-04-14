import React from "react";

function Button(props) {
	return (
		<button
			style={{
				padding: "8px 15px",
				textAlign: "center",
				textDecoration: "none",
				display: "inline-block",
				borderRadius: "5px",
				border: "none",
				color: "white",
				background: "#da4302",
			}}
			onClick={props.onClick}
		>
			{props.content}
		</button>
	);
}

export default Button;
