import React from "react";
import Button from "./Button";

function Search(props) {
	return (
		<div className="search">
			<input
				placeholder="Search..."
				onChange={props.onChange}
				value={props.value}
				style={{ padding: "10px", borderRadius: "5px", border: "none" }}
			/>
			<Button content="Search" onClick={props.searchClick} />
			<Button content="Show All" onClick={props.showAllClick} />
		</div>
	);
}

export default Search;
