import type { Tool } from "../types";
import {
	afterEffects,
	angular,
	audacity,
	baserow,
	bem,
	cypress,
	d3,
	docker,
	githubActions,
	illustrator,
	jasmine,
	jest,
	js,
	next,
	node,
	nuxt,
	photoshop,
	polymer,
	pug,
	python,
	react,
	scss,
	storyblok,
	storybook,
	strapi,
	styledComponents,
	tailwind,
	testCafe,
	ts,
	vite,
	vue,
	wagtail,
	wordPress,
} from "./tools";

const dev: Tool[] = [
	// { name: "HTML", logo: "html" },
	// pug,
	// { name: "CSS", logo: "css" },
	// scss,
	// bem,
	// { name: "SMACSS", logo: "smacss" },
	// styledComponents,
	// tailwind
	js,
	ts,
	vue,
	nuxt,
	react,
	next,
	// polymer,
	// angular,
	d3,
	storybook,
	vite,
	githubActions,
	docker,
	jest,
	testCafe,
	// cypress,
	// jasmine
	storyblok,
	strapi,
	wordPress,
	// node,
	python,
	// wagtail
	// baserow,
	{ name: "SQL" },
];

const media: Tool[] = [
	audacity,
	illustrator,
	photoshop,
	// { name: "InDesign", logo: "adobeindesign" },
	// { name: "Premiere Pro", logo: "adobepremierepro" },
	afterEffects,
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
