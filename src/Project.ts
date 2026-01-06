interface Project {
	name: string;
	description: string;
	screenshot?: string;
	url: string | undefined;
	repo: string;
}

const projects: Project[] = [
	{
		name: "Scramjet",
		description:
			"An experimental interception-based web proxy that aims to be the successor to Ultraviolet.",
		screenshot: undefined,
		url: "https://scramjet.mercurywork.shop/",
		repo: "https://github.com/MercuryWorkshop/scramjet",
	},
	{
		name: "anuraOS",
		description:
			"A web OS and development environment with full Linux emulation, for systems education in restricted environments.",
		screenshot: "https://raw.githubusercontent.com/MercuryWorkshop/anuraOS/main/assets/showcase.png",
		url: "https://anura.pro/",
		repo: "https://github.com/MercuryWorkshop/anuraOS",
	},
	{
		name: "Serverguard",
		description:
			"An open source discord verification bot meant to preserve the privacy of the users.",
		screenshot: undefined,
		url: "https://discord.gg/unblock",
		repo: "https://github.com/titaniumnetwork-dev/serverguard",
	},
	{
		name: "Streamline",
		description:
			"A frontend for musicbrainz that allows dynamic sourcing of tracks",
		screenshot: undefined,
		url: "#",
		repo: "https://github.com/luphoria/streamline",
	},
];

export default projects;
