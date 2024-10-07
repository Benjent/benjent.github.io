import type { Tool } from "../types";
import {
	afterEffects,
	audacity,
	baserow,
	d3,
	docker,
	guitarPro,
	githubActions,
	illustrator,
	inkscape,
	jest,
	js,
	next,
	nuxt,
	photoshop,
	python,
	react,
	storyblok,
	storybook,
	strapi,
	testCafe,
	ts,
	vite,
	vue,
	wordPress,
	gimp,
} from "./tools";

const dev: Tool[] = [
	// html,
	// pug,
	// css,
	// scss,
	// bem,
	// smacss,
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
	baserow,
	{ name: "SQL" },
];

const media: Tool[] = [
	audacity,
	guitarPro,
	inkscape,
	gimp,
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
