interface Project {
	name: string;
	description: string;
	screenshot?: string;
	url: string | undefined;
	repo: string;
}

const projects: Project[] = [
	{
		name: "anuraOS",
		description:
			"A web OS and development environment with full Linux emulation, for systems education in restricted environments.",
		screenshot: undefined,
		url: "https://anura.pro/",
		repo: "https://github.com/MercuryWorkshop/anuraOS",
	},
	{
		name: "Scramjet",
		description:
			"An experimental interception-based web proxy that aims to be the successor to Ultraviolet.",
		screenshot: undefined,
		url: "https://scramjet.mercurywork.shop/",
		repo: "https://github.com/MercuryWorkshop/scramjet",
	},
];

export default projects;
