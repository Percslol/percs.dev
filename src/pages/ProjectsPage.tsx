import { css, type FC } from "dreamland/core";
import { Link } from "dreamland/router";
import projects, { type Project } from "../Project";

function ProjectCard(this: FC<{ project: Project }>) {
	return (
		<Link class="remove-styles" href={`/project/${this.project.name}`}>
			<section>
				<img src={`/thumbnails/${this.project.name}.png`} />
				<h2>{this.project.name}</h2>
				<p>{this.project.description}</p>
			</section>
		</Link>
	);
}
ProjectCard.style = css`
	a {
		text-decoration: none;
		color: inherit;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(50rem, 70vw), 1fr));
		gap: 1em;
		padding: 1em;
	}

	img {
		max-height: 40vh;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	img,
	a {
		padding: 0.5em;
	}
	h2,
	p {
		text-align: center;
	}
`;
function ProjectsPage() {
	return (
		<div>
			{projects.map((project) => (
				<ProjectCard project={project} />
			))}
		</div>
	);
}

ProjectsPage.style = css`
	:scope {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(50rem, 70vw), 1fr));
		gap: 1em;
		padding: 1em;
	}
`;

export default ProjectsPage;
