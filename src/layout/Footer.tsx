import { css } from "dreamland/core";
const Navbar = function () {
	return (
		<footer>
			<div class="content" title={`built on ${__BUILD_DATE__}`}>
				<div>percs.dev</div>
				&bull;
				<div>build {__COMMIT_HASH__}</div>
			</div>
		</footer>
	);
};

Navbar.style = css`
	.content {
		display: flex;
		width: 98.7%;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;
		gap: 0.5em;

		font-size: 0.9rem;
	}
`;
export default Navbar;
