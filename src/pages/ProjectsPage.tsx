import { css, type Component } from "dreamland/core";
import projects from "../Project";

const Project: Component<{
	project: any;
}> = function (cx) {
	return (
		<div>
			<section>
				<h2>{this.project.name}</h2>
				<p>{this.project.description}</p>
				{this.project.screenshot ? (
					<img src={this.project.screenshot}></img>
				) : null}
				<a href={this.project.repo}>Source</a>
				<a href={this.project.url}>Demo</a>
			</section>
		</div>
	);
};
Project.style = css`
	a {
		padding: 0.5em;
	}
`;
const ProjectsPage: Component = function () {
	return (
		<div>
			{projects.map((project) => (
				<div>
					<Project project={project} />
					<hr />
				</div>
			))}
		</div>
	);
};

export default ProjectsPage;
