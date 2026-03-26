import { css, type FC } from "dreamland/core";
import type { RouterState } from "dreamland/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(this: FC<{ routerState: RouterState }>) {
	return (
		<div>
			<Navbar />
			<main>
				<fieldset>{use(this.routerState.outlet)}</fieldset>
			</main>
			<Footer />
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
