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
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
	}
	
	img {
		max-height: 40vh;
		max-width: 100%;
		width: 100%;
		object-fit: contain;
	}
	
	h2, p {
		max-width: 100%;
		word-wrap: break-word;
	}
	
	a {
		padding: 0.5em 1em;
		display: inline-block;
		flex-wrap: wrap;
	}
	
	@media (max-width: 768px) {
		img {
			min-width: auto;
			max-height: 50vh;
		}
		
		a {
			width: 100%;
			text-align: center;
		}
	}
`;
export default ProjectView;
