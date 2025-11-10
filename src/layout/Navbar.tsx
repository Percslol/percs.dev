import { css } from "dreamland/core";
import { Link } from "dreamland/router";

const Navbar = function () {
	return (
		<header>
			<nav>
				<Link href="/">home</Link>
				<br />
				<Link href="/projects">projects</Link>
				<br />
				<Link href="/contact">contact</Link>
			</nav>
		</header>
	);
};

Navbar.style = css`
	nav {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding-left: 1.5rem;
		align-items: flex-start;
		flex-shrink: 0;
		gap: 1em;

		font-size: 0.9rem;
	}
`;
export default Navbar;
