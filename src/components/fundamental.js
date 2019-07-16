import React from "react";

export default function Fundamental(props) {
	return (
		<div className="col-lg">
		<div className="card">
			<div class="card-body text-center">
				<h4 class="card-title" data-toggle="tooltip" data-placement="bottom" title={props.acronym}>{props.title}</h4>
				<i className={props.icon} style={{
					display: 'block',
					fontSize: '6rem'
				}}></i>
				<small class="card-text">
					{props.description}
				</small>
			</div>
		</div>
		</div>
	);
}
