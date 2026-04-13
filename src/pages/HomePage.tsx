import LastFm from "../components/LastFm";
import ButtonList from "../components/WebButton";

function Homepage() {
	return (
		<div>
			<img src="/pfp.webp" alt="percs" height="128px" />
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
				<LastFm username="Percslol" />
			</section>
			<section class="buttons">
				<h3>buttons</h3>
				<ButtonList />
			</section>
		</div>
	);
}

export default Homepage;
