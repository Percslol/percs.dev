import { css, type FC } from "dreamland/core";
import projects, { type Project } from "../Project";

function Project(this: FC<{ project: Project }>) {
	return (
		<a href={`/projects/${this.project.name}`}>
			<section>
				<img src={`/thumbnails/${this.project.name}.png`} />
				<h2>{this.project.name}</h2>
				<p>{this.project.description}</p>
			</section>
		</a>
	);
};
Project.style = css`
	a {
		text-decoration: none;
		color: inherit;
	}
	img {
		max-height: 40vh;
		min-width: min(50rem, 70vw);
	}
	img,
	a {
		padding: 0.5em;
	}
`;
function ProjectsPage() {
	return (
		<div>
			{projects.map((project) => (
				<Project project={project} />
			))}
		</div>
	);
};

ProjectsPage.style = css`
	:scope {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(50rem, 70vw), 1fr));
		gap: 1em;
		padding: 1em;
	}
`;

export default ProjectsPage;
