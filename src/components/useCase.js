import React from "react";

export default function UseCase(props) {
	return (
		<li>
			<span class="font-weight-bold">{props.title}</span> ({props.description})
		</li>
	);
}
