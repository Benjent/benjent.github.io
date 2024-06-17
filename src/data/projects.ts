import type { Project } from "../types";

const projects: Project[] = [
	{
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
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "SCSS", logo: "sass" },
			{ name: "GitHub Actions", logo: "githubactions" },
		],
	},
	{
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
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "SCSS", logo: "sass" },
			{ name: "D3", logo: "d3.js" },
			{ name: "GitHub Actions", logo: "githubactions" },
		],
	},
	{
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
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "Tailwind CSS", logo: "tailwindcss" },
			{ name: "GitHub Actions", logo: "githubactions" },
		],
	},
	{
		image: "nice-resume.png",
		name: "Nice Resume",
		description:
			"[Work in progress...] Resume and cover letter builder with themes. Let the user customize and print documents that match his/her own brand design.",
		// url: "https://benjent.github.io/nice-resume", // TODO
		conditions: [
			"Freedom of customization (no strict theme)",
			"Real-time preview of data edition",
			"Internationalization",
			"Session saving and export",
			"JSON Resume import and compatible export",
			// "Zero-hosting-cost",
			// "Zero-deployment-cost",
			"Autodeployment",
		],
		tools: [
			{ name: "Vue.js", logo: "vue.js" },
			{ name: "Tailwind CSS", logo: "tailwindcss" },
			{ name: "TS", logo: "typescript" },
			{ name: "GitHub Actions", logo: "githubactions" },
		],
	},
];

export default projects;
