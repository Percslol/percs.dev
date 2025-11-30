import { css, type Component } from "dreamland/core";
import LastFm from "../components/LastFm";
import { WebButton } from "../components/WebButton";

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
			<section>
				<h3>music</h3>
				<LastFm username={"Percslol"} />
			</section>
			<section class="buttons">
				<h3>buttons</h3>
				<WebButton src="/buttons/mercury.gif" href="https://mercurywork.shop" title="mercury workshop" />
				<WebButton src="/buttons/dreamland.png" href="https://dreamland.js.org" title="dreamland.js" />
				<WebButton
					src="https://omada.cafe/omada.gif"
					href="https://omada.cafe/"
					title="omada.cafe"
				/>
				<hr />
				<WebButton
					src="https://bomberfish.ca/button.gif"
					href="https://bomberfish.ca"
					title="BomberFish"
				/>
				<WebButton src="https://velzie.rip/88x31.png" href="https://velzie.rip" title="velzie" />
				<WebButton src="https://wearr.dev/88x31.gif" href="https://wearr.dev" title="wearr" />
				<WebButton src="https://foxmoss.com/foxmossbutton.png" href="https://foxmoss.com" title="foxmoss" />
				<WebButton
					src="https://errorcodezero.dev/button.png"
					href="https://errorcodezero.dev/"
					title="errorcodezero"
				/>
			</section>
		</div>
	);
};

Homepage.style = css`
	:global(.buttons > a) {
		padding: 0.5em;
	}
`;

export default Homepage;
