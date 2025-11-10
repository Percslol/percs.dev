import { css, type Component } from "dreamland/core";
import Navbar from "./Navbar";

const Layout: Component<
	{},
	{ outlet: Element; container: HTMLElement; player: HTMLElement }
> = function () {
	return (
		<div>
			<Navbar />
			<main this={use(this.container)}>
				<fieldset>{use(this.outlet)}</fieldset>
			</main>
		</div>
	);
};

Layout.style = css`
	:scope {
		height: 100%;
		width: calc(100%);
		display: flex;
		flex-direction: column;
	}

	main {
		justify-content: center;
		flex: 1;
		overflow-y: auto;
		padding: 1.5em;
	}
`;

export default Layout;
