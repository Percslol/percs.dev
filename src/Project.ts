export interface Project {
	name: string;
	description: string;
	links: ProjectLinks[];
}
interface ProjectLinks {
	icon?: string;
	label: string;
	url: string;
}

const projects: Project[] = [
	{
		name: "Scramjet",
		description:
			"An experimental interception-based web proxy that aims to be the successor to Ultraviolet.",
		links: [
			{
				label: "Demo",
				url: "https://scramjet.mercurywork.shop/",
			},
			{
				label: "Source Code",
				url: "https://github.com/MercuryWorkshop/scramjet",
			},
		],
	},
	{
		name: "anuraOS",
		description:
			"A web OS and development environment with full Linux emulation, for systems education in restricted environments.",
		links: [
			{
				label: "Demo",
				url: "https://anura.pro/",
			},
			{
				label: "Source Code",
				url: "https://github.com/MercuryWorkshop/anuraOS",
			},
		],
	},
	{
		name: "Serverguard",
		description:
			"An open source discord verification bot meant to preserve the privacy of the users.",
		links: [
			{
				label: "Source Code",
				url: "https://github.com/titaniumnetwork-dev/serverguard",
			},
		],
	},
	{
		name: "Streamline",
		description:
			"A frontend for musicbrainz that allows dynamic sourcing of tracks",
		links: [
			{
				label: "Source Code",
				url: "https://github.com/luphoria/streamline",
			},
		],
	},
];

export default projects;
