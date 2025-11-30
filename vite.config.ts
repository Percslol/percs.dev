import type { UserConfig } from "vite";
import { devSsr } from "dreamland/vite";
import { literalsHtmlCssMinifier } from "@literals/rollup-plugin-html-css-minifier";

import { execSync } from "node:child_process";

export default {
	define: {
		__COMMIT_HASH__: (() => {
			try {
				const hash = JSON.stringify(
					execSync("git rev-parse --short HEAD", {
						encoding: "utf-8",
					}).replace(/\r?\n|\r/g, "")
				);

				return hash;
			} catch {
				return JSON.stringify("unknown");
			}
		})(),
		__BUILD_DATE__: JSON.stringify(new Date().toISOString()),
	},
	plugins: [
		literalsHtmlCssMinifier({
			include: ["src/**/*.tsx"],
		}),
		devSsr({
			entry: "/src/main-server.ts",
		}),
	],
} satisfies UserConfig;
