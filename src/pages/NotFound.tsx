import { css } from "dreamland/core";
import { Link } from "dreamland/router";

function NotFound() {
	return (
		<div>
			<h2>not found</h2>
			<p>the page you are looking for does not exist.</p>
			<Link href="/">go home</Link>
		</div>
	);
};
NotFound.style = css`
	:scope {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default NotFound;
