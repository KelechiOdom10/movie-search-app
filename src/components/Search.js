import React from "react";
import { Input, Button } from "semantic-ui-react";

function Search(props) {
	return (
		<div>
			<Input
				placeholder="Search..."
				onChange={props.onChange}
				value={props.value}
			/>
			<Button content="Search" onClick={props.searchClick} />
			<Button content="Show All" onClick={props.showAllClick} />
		</div>
	);
}

export default Search;
