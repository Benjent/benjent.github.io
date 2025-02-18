import type { Project } from "../types";
import {
	astro,
	baserow,
	bulma,
	d3,
	docker,
	githubActions,
	mapbox,
	n8n,
	next,
	nuxt,
	primeVue,
	ruby,
	scss,
	strapi,
	tailwind,
	ts,
	vue,
} from "./tools";

const projects: Project[] = [
	{
		wip: false,
		hasLogo: true,
		image: "prog-snack.png",
		name: "Prog Snack",
		description:
			"Webapp to browse music albums from the Progressive Rock genre. Initially a Vue.js tryout and sandbox project, I mainly maintain its content from time to time.",
		url: "https://benjent.github.io/prog-snack",
		conditions: [
			"Serverless",
			"Zero-hosting-cost",
			"Zero-deployment-cost",
			"Databaseless (fast and easy way to edit the data through the code)",
			"Vue.js 2",
			"SCSS",
			"Autodeployment",
			"Responsive design",
		],
		tools: [vue, scss, githubActions],
	},
	{
		wip: false,
		hasLogo: true,
		image: "nanovizer.png",
		name: "NanoViZer",
		description:
			"Interactive data-visualisation and chart-saver tool assisting researchers in their work. This is a front-end solution to be used with a locally-running server written in Python.",
		url: "https://benjent.github.io/nanovizer",
		conditions: [
			"Interactive charts",
			"Fewest impacts on the existing back-end solution",
			"Zero-hosting-cost",
			"Zero-deployment-cost",
			"Vue.js 3",
			"SCSS",
			"D3.js",
			"Autodeployment",
		],
		tools: [vue, scss, d3, githubActions],
	},
	{
		wip: false,
		hasLogo: true,
		image: "attendance-sheet.png",
		name: "Attendance Sheet",
		description:
			"Attendance sheet auto-filler based on ICOOPA's template. Initially a Tailwind CSS tryout project, I let Les Octets Libres team use it to save them the burden of printing then scanning back their attendance sheet.",
		url: "https://benjent.github.io/attendance-sheet",
		conditions: [
			"Pre-fill sheet with default values (name, hours, public holidays)",
			"Comply with ICOOPA's own template",
			"Zero-hosting-cost",
			"Zero-deployment-cost",
			"Vue.js 3",
			"Tailwind CSS",
			"Autodeployment",
		],
		tools: [vue, tailwind, githubActions],
	},
	{
		wip: true,
		hasLogo: false,
		image: "nice-resume.png",
		name: "Nice Resume",
		description:
			"Resume and cover letter builder with themes. Let the user customize and print documents that match his/her own brand design.",
		// url: "https://benjent.github.io/nice-resume", // TODO
		conditions: [
			"Theme selection",
			"Freedom of customization (not just colors and font sizes)",
			"Real-time preview of data edition",
			"Internationalization",
			"Session saving and export",
			"JSON Resume import and compatible export",
			"Nuxt.js",
			"Autodeployment",
		],
		tools: [vue, nuxt, primeVue, tailwind, ts, githubActions],
	},
	{
		wip: true,
		hasLogo: true,
		image: "lea-kormas.png",
		name: "Léa Kormas",
		description:
			"Personal website for an animal osteopath. The design must be simple and extends existing leaflets.",
		// url: "https://benjent.github.io/lea-kormas", TODO url
		conditions: [
			"SEO improvement",
			"Brown and light color usage to match existing print design",
		],
		tools: [astro, tailwind],
	},
	{
		wip: true,
		hasLogo: true,
		image: "ocean-plastic-tracker.png",
		name: "Ocean Plastic Tracker",
		description:
			"Web application allowing users to visualize and report pre-defined marine debris on the coast. I help the developers maintain the front-end and migrate from Vue.js v1 to v3.",
		url: "https://oceanplastictracker.com",
		conditions: [
			"Cartography",
			"Internationalization",
			"Optional authentication",
			"Vue.js 3",
		],
		tools: [vue, bulma, scss, mapbox, ruby, docker],
	},
	{
		wip: false,
		hasLogo: true,
		image: "cf-fsu.png",
		name: "Centre de formation de la F.S.U.",
		description:
			"Web application to list union-related courses, administrate user registrations and manage content. This project automates processes so that members can focus on giving courses.",
		url: "https://formation.fsu.fr",
		conditions: [
			"User management",
			"No-code integration",
			"E-mail sending automation",
			"Free-tier third party integration",
		],
		tools: [next, tailwind, baserow, n8n],
	},
	{
		wip: false,
		hasLogo: true,
		image: "l8l.png",
		name: "Les Octets Libres",
		description:
			"Website migration from Jekyll+SCSS to Astro+TailwindCSS with small UX/UI improvements.",
		url: "https://lesoctetslibres.com",
		conditions: ["Astro v4", "Strapi v4", "TailwindCSS v3", "Ecodesign"],
		tools: [astro, strapi, tailwind],
	},
	{
		wip: true,
		hasLogo: true,
		image: "fkbr.png",
		name: "Franck Kerbiriou",
		description: "Personal website for a DevOps engineer.",
		// url: "https://lesoctetslibres.com", TODO url
		conditions: [
			"Simple design",
			"Linear-design like",
			"Dark and orange color usage",
		],
		tools: [astro, tailwind],
	},
	{
		wip: true,
		hasLogo: false,
		image: "nolwenn-quinquis.png",
		name: "Nolwenn Quinquis",
		description:
			"Personal website for a cultural mediator. This project aims to highlight experience and projects through a exciting, playful design.",
		// url: "https://lesoctetslibres.com", TODO url
		conditions: [],
		tools: [astro, tailwind],
	},
];

export default projects;
