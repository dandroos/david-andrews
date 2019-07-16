import React from "react";
import AdditionalSkill from "./additionalSkill";

export default function AdditionalSkillsList() {
	return (
		<div>
			<ul className="list-group list-group-flush">
				<AdditionalSkill
					title="Server-side languages"
					skillsList="PHP, Node, Python"
				/>
				<AdditionalSkill
					title="Databases"
					skillsList="MySQL, PostgreSQL, MongoDB"
				/>
				<AdditionalSkill
					title="Front-end frameworks"
					skillsList="React, Gatsby, Bootstrap, Materialize"
				/>
				<AdditionalSkill
					title="Web app frameworks"
					skillsList="Django, Laravel"
				/>
				<AdditionalSkill
					title="Other tools"
					skillsList="Wordpress (content manangement system), SASS
                                (CSS pre-processor), Pug (HTML template
                                generator), NPM (package manager), D3 (data
                                visualisation) and foundation DevOps"
				/>
			</ul>
		</div>
	);
}
