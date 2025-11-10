import { type Component } from "dreamland/core";

const ContactPage: Component = function () {
	return (
		<div>
			<h2>contact:</h2>
			<span>
				you can contact me at any of the following, though i might be slow to
				respond on some.
			</span>
			<ul>
				<li>
					<a href="mailto:me@percs.dev">email</a>
				</li>
				<li>
					<a href="https://github.com/percslol">github</a>
				</li>
				<li>
					<a href="https://discord.com/users/76755933984168346">discord</a>
				</li>
				<li>
					<a href="https://signal.me/#eu/vxUhAa-YsPDRNc0BKGMeS_NklIm9AYnBvhGwodheym6ATgr3y6RG76XFJSa2FHrx">
						signal
					</a>
				</li>
				<li>
					<a href="https://x.com/percsisok">x</a>
				</li>
				<li>
					<a href="https://bsky.app/profile/did:plc:oo7qxx7qeuu77cy74n7mxprf">
						bluesky
					</a>
				</li>
				<li>
					<a href="https://fedi.omada.cafe/@percs">fediverse</a>
				</li>
				<li>
					<a href="https://steamcommunity.com/id/percslol">steam</a>
				</li>
			</ul>
		</div>
	);
};

export default ContactPage;
