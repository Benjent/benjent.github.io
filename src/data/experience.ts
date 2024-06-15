import type { Experience } from "../types";

const experience: Experience[] = [
	{
		position: "Full-stack web developer",
		company: {
			name: "Les Octets Libres",
			logo: "les-octets-libres.png",
			url: "https://www.lesoctetslibres.com/",
			location: "Quimperlé, France",
		},
		period: "Since Nov 2023",
		about:
			"Software development and website generation with digital carbon footprint reduction.",
		tasks: [
			"Continuous integration and delivery automation",
			"Technical debt analysis and removal",
			"Customer relation and project estimate",
		],
		tools: [
			{ name: "React", logo: "react" },
			{ name: "Wagtail", logo: "wagtail" },
			{ name: "Django", logo: "django" },
			{ name: "PostgreSQL", logo: "postgresql" },
			// { name: "Baserow", logo: "baserow" },
			{ name: "Metabase", logo: "metabase" },
			{ name: "Strapi", logo: "strapi" },
			{ name: "Astro", logo: "astro" },
			{ name: "Tailwind CSS", logo: "tailwindcss" },
			{ name: "Docusaurus", logo: "docusaurus" },
			{ name: "VitePress", logo: "vitepress" },
			{ name: "GitHub", logo: "github" },
			{ name: "Docker", logo: "docker" },
		],
		// projects: [
		// 	{
		// 		logo: "adria.png",
		// 		alt: "ADRIA logo",
		// 		about: "Software development for food expertise and regulations.",
		// 		tasks: [
		// 			"Technical specification",
		// 			"Database analytics and querying setup",
		// 		],
		// 		tools: [
		// 			{ name: "React", logo: "react" },
		// 			{ name: "Wagtail", logo: "wagtail" },
		// 			{ name: "Django", logo: "django" },
		// 			{ name: "Metabase", logo: "metabase" },
		// 		],
		// 	},
		// 	{
		// 		logo: "smile56.png",
		// 		alt: "Smile56 logo",
		// 		about:
		// 			"Website development for an organization helping children in foster care in the Morbihan department.",
		// 		tasks: [],
		// 		tools: [
		// 			{ name: "React", logo: "react" },
		// 			{ name: "Astro", logo: "astro" },
		// 			{ name: "Strapi", logo: "strapi" },
		// 		],
		// 	},
		// ],
	},
	{
		position: "Full-stack web developer",
		company: {
			name: "Octopus Energy France",
			logo: "octopus.png",
			url: "https://octopusenergy.fr/",
			location: "Paris, France",
		},
		period: "Sep 2019 - Oct 2023",
		about:
			"Software development for green electricity consumption and consumption awareness.",
		tasks: [
			"Website, journey, and application development for clients (company website, account and consumption dashboard, subscription journey, blog, ...)",
			"Front-end architecture",
			"Design system setup and maintainance for microservices UI consistency in collaboration with designers",
			"Front-end training of team members",
			"Automated E2E testing",
		],
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "React", logo: "react" },
			{ name: "Next", logo: "next.js" },
			{ name: "Typescript", logo: "typescript" },
			{ name: "SCSS", logo: "sass" },
			{ name: "WordPress", logo: "wordpress" },
			{ name: "D3.js", logo: "d3.js" },
			{ name: "Storyblok", logo: "storyblok" },
			{ name: "Storybook", logo: "storybook" },
			{ name: "GraphQL ", logo: "graphql" },
			{ name: "node", logo: "node.js" },
			{ name: "Testcafé", logo: "testcafe" },
		],
	},
	{
		position: "Full-stack web developer",
		company: {
			name: "ForCity",
			logo: "forcity.png",
			location: "Cesson-Sévigné, France",
		},
		period: "Sep 2018 - Aug 2019",
		about: "Software development for geoworking decision.",
		tasks: [
			"Front-end development",
			"Design and technical specification",
			"UX/UI thinking in collaboration with designers",
		],
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "Mapbox", logo: "mapbox" },
			{ name: "SCSS", logo: "sass" },
			{ name: "Jasmine", logo: "jasmine" },
			{ name: "Illustrator", logo: "adobeillustrator" },
		],
	},
	{
		position: "Software engineer",
		company: {
			name: "Naval Group",
			logo: "naval-group.png",
			url: "https://www.naval-group.com",
			location: "Ollioules, France",
		},
		period: "Sep 2015 - Sep 2018",
		about: "R&D Software development for warships.",
		tasks: [
			"Full-stack development and database management",
			"Software architecture implementation allowing evolving guidelines integration",
			"UX/UI design",
		],
		tools: [
			{ name: "Polymer", logo: "polymerproject" },
			{ name: "Angular", logo: "angular" },
			{ name: "Typescript", logo: "typescript" },
			{ name: "SCSS", logo: "sass" },
			{ name: "Cesium", logo: "cesium" },
			// { name: "Java", logo: "java" },
			{ name: "PostgreSQL", logo: "postgresql" },
			// { name: "PostGIS", logo: "postgis" },
			{ name: "Illustrator", logo: "adobeillustrator" },
		],
	},
	{
		position: "Web integrator",
		company: {
			name: "Parachute",
			logo: "parachute.png",
			url: "https://www.parachute.net/",
			location: "Glasgow, Scottland",
		},
		period: "Jan 2015 - Mar 2015",
		about: "Integration and deployment of responsive websites.",
		tasks: [
			"CMS integration based on boilerplates",
			"Adaptive and responsive design integration",
		],
		tools: [
			{ name: "WordPress", logo: "wordpress" },
			{ name: "SCSS", logo: "sass" },
			{ name: "Grunt", logo: "grunt" },
		],
	},
	// {
	// 	position: "Co-manager and polyvalent musician",
	// 	company: {
	// 		name: "Music Act Fontaine",
	// 		logo: "fontaine.png",
	// 		location: "Fontaine-lès-Dijon, France",
	// 	},
	// 	period: "Oct 2010 - June 2013",
	// 	about: "Live concert and rehearsal organisation.",
	// },
];

export default experience;
