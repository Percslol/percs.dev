import { Router, router, Route } from "dreamland/router";
import { type Component, type Stateful, createState } from "dreamland/core";

import Layout from "./layout/Layout";
import Homepage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

let page: Stateful<{
	url?: string;
}> = createState({});

const App: Component = function (cx) {
	cx.init = () => {
		if (import.meta.env.SSR) {
			router.route(page.url, "http://127.0.0.1:5173");
		} else {
			router.route();
		}
	};
	return (
		<div id="app">
			<Router>
				<Route show={<Layout />}>
					<Route show={<Homepage />} />
					<Route path="projects" show={<ProjectsPage />} />
					<Route path="contact" show={<ContactPage />} />
				</Route>
			</Router>
		</div>
	);
};

export default (path?: string) => {
	page.url = path;
	return <App />;
};
