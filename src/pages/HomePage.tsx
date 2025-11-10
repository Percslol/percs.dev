import { css, type Component } from "dreamland/core";

const Homepage: Component = function () {
	return (
		<div>
			<img src="/pfp.webp" alt="percs" height="128px" weight="128px" />
			<section>
				<h3>about me</h3>
				<p>hey! welcome to my little corner of the internet :3</p>
				<p>i'm percs, a 16 y/o developer living in texas!</p>
				<p>
					i make cool software with{" "}
					<a href="https://mercurywork.shop">mercury workshop</a> and work on my
					own personal projects.
				</p>
				<p>i'm interested in webdev, hardware, and architecture design.</p>
				<p>i'm fluent in javascript, and i'm also learning rust and c.</p>
			</section>
			<section class="buttons">
				<h3>buttons</h3>
				<a href="https://mercurywork.shop">
					<img src="/buttons/mercury.gif" alt="mercury workshop" />
				</a>
				<a href="https://dreamland.js.org">
					<img src="/buttons/dreamland.png" alt="dreamland.js" />
				</a>
				<a href="https://omada.cafe/">
					<img
						src="https://omada.cafe/omada.gif"
						alt="website button for omada.cafe, a private and secure alternative provider."
					/>
				</a>
				<a href="https://bomberfish.ca">
					<img
						src="https://bomberfish.ca/button.gif"
						alt="BomberFish"
						title="BomberFish"
					/>
				</a>
				<a href="https://velzie.rip">
					<img src="https://velzie.rip/88x31.png" alt="velzie" />
				</a>
				<a href="https://wearr.dev">
					<img src="https://wearr.dev/88x31.gif" alt="wearr" />
				</a>
				<a href="https://foxmoss.com">
					<img src="https://foxmoss.com/foxmossbutton.png" alt="foxmoss" />
				</a>
				<a href="https://errorcodezero.dev/">
					<img
						src="https://errorcodezero.dev/button.png"
						alt="errorcodezero's button"
					/>
				</a>
			</section>
		</div>
	);
};

Homepage.style = css`
	.buttons > a {
		padding: 0.5em;
	}
`;

export default Homepage;
