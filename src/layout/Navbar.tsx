import { css } from "dreamland/core";
import { Link } from "dreamland/router";

const Navbar = function () {
	return (
		<header>
			<div class="title">
				<Link href="/">
					<img src="/pfp.webp" alt="percs" id="me" height="128px" weight="128px" />
				</Link>
			</div>
			<nav>
				<Link href="/">home</Link>
				<br />
				<Link href="/projects">projects</Link>
				<br/>
				<Link href="/contact">contact</Link>
			</nav>
		</header>
	);
};

Navbar.style = css`
	:scope {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 1.5rem;
		align-items: flex-start;
		height: 100vh;
		width: 25em;
		flex-shrink: 0;
		gap: 1em;

		background: var(--bg-grad);
		color: var(--on-grad);

		font-size: 0.9rem;
	}
`;
export default Navbar;