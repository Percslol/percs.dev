import { css, type FC } from "dreamland/core";
import type { Project } from "../Project";

function ProjectView(this: FC<{ project: Project }>) {
	return (
		<div>
			<section>
				<img src={`/thumbnails/${this.project.name}.png`} />
				<h2>{this.project.name}</h2>
				<p>{this.project.description}</p>
				{this.project.links.map((link) => (
					<a href={link.url}>{link.label}</a>
				))}
			</section>
		</div>
	);
};
ProjectView.style = css`
	img,
	a {
		padding: 0.5em;
	}
	img {
		max-height: 40vh;
		min-width: min(50rem, 70vw);
	}
`;
export default ProjectView;
