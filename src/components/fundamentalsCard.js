import React from "react";
import Fundamental from "./fundamental";

export default function FundamentalsCard(props) {
	return (
		<div class="card-deck row">
				<Fundamental
					title="HTML"
					icon="fab fa-html5"
					acronym="Hyper Text Markup Language"
					description="The skeleton"
				/>
				<Fundamental
					title="CSS"
					icon="fab fa-css3-alt"
					acronym="Cascading Style Sheets"
					description="The aesthetics"
				/>
				<Fundamental
					title="JavaScript"
					icon="fab fa-js"
					acronym=""
					description="The dynamics"
				/>
		</div>
	);
}
