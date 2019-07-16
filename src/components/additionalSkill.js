import React from "react";

export default function AdditionalSkill(props) {
	return (
		<li className="list-group-item">
			<span className="font-weight-bold">{props.title}:</span>
			<br />
			{props.skillsList}
		</li>
	);
}
