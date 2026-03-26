import { type FC } from "dreamland/core";
import { Router, Route } from "dreamland/router";

import Layout from "./layout/Layout";
import Homepage from "./pages/HomePage";
import projects from "./Project";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectView from "./pages/ProjectView";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App(this: FC<{ url?: string }>) {
	return (
		<div id="app">
			<Router initial={this.url ? [this.url, "http://127.0.0.1:5173"] : []}>
				<Route layout={Layout}>
					<Route show={<Homepage />} />
					<Route path="projects" show={<ProjectsPage />}>
						{...projects.map((project) => (
							<Route
								path={project.name}
								show={<ProjectView project={project} />}
							/>
						))}
					</Route>
					<Route path="contact" show={<ContactPage />} />
					<Route path="*" show={<NotFound />} />
				</Route>
			</Router>
		</div>
	);
};

export default (url?: string) => <App url={url} />;