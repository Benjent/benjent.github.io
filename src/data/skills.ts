import type { Tool } from "../types";

const dev: Tool[] = [
	// { name: "HTML", logo: "html" },
	// { name: "Pug", logo: "pug" },

	// { name: "CSS", logo: "css" },
	// { name: "SCSS", logo: "sass" },
	// { name: "BEM", logo: "bem" },
	// { name: "SMACSS", logo: "smacss" },
	// { name: "Styled-components", logo: "styledcomponents" },
	// { name: "Tailwind CSS", logo: "tailwindcss" },

	{ name: "JS", logo: "javascript" },
	// { name: "JSDoc" },
	{ name: "TS", logo: "typescript" },

	{ name: "Vue.js", logo: "vue.js" },
	{ name: "Nuxt.js", logo: "nuxt.js" },
	{ name: "React", logo: "react" },
	{ name: "Next.js", logo: "next.js" },
	// { name: "Polymer", logo: "polymerproject" },
	// { name: "Angular", logo: "angular" },

	{ name: "D3", logo: "d3.js" },
	{ name: "Storybook", logo: "storybook" },

	{ name: "Vite", logo: "vite" },

	// { name: "Git", logo: "git" },
	{ name: "GitHub Actions", logo: "githubactions" },
	{ name: "Docker", logo: "docker" },

	{ name: "Jest", logo: "jest" },
	{ name: "TestCafé", logo: "testcafe" },
	// { name: "Cypress", logo: "cypress" },
	// { name: "Jasmine", logo: "jasmine" },
	// { name: "Mocha", logo: "mocha" },
	// { name: "Chai", logo: "chai" },

	{ name: "Storyblok", logo: "storyblok" },
	{ name: "Strapi", logo: "strapi" },
	{ name: "WordPress", logo: "wordpress" },

	{ name: "SQL" },
	{ name: "Baserow", logo: "baserow" },

	{ name: "Node.js", logo: "node.js" },
	{ name: "Python", logo: "python" },
	// { name: "Wagtail", logo: "wagtail" },
];

const media: Tool[] = [
	{ name: "Audacity", logo: "audacity" },
	{ name: "Illustrator", logo: "adobeillustrator" },
	{ name: "Photoshop", logo: "adobephotoshop" },
	// { name: "InDesign", logo: "adobeindesign" },
	// { name: "Premiere Pro", logo: "adobepremierepro" },
	{ name: "After Effects", logo: "adobeaftereffects" },
];

const languages: Tool[] = [
	{ name: "French (mother tongue)", logo: "&#127467;&#127479;" },
	{ name: "English (fluent, C1 level)", logo: "&#127468;&#127463;" },
	{ name: "German (basic knowledge)", logo: "&#127465;&#127466;" },
];

export default {
	dev,
	media,
	languages,
};
