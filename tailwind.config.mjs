/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				shake: "shake 8s infinite ease-in-out",
				"spin-once": "spin .2s forwards ease-in-out",
				"unstablize-left": "unstablize-left 8s infinite ease-in-out",
				"unstablize-right": "unstablize-right 8s infinite ease-in-out",
			},
			colors: {
				primary: {
					light: "#f2577a",
					DEFAULT: "#ed3660",
				},
				secondary: {
					DEFAULT: "#5662e8",
					dark: "#424eda",
				},
				tertiary: {
					light: "todo",
					DEFAULT: "#e8afcf",
					dark: "todo",
				},
				quaternary: {
					DEFAULT: "#e8dbdb",
				},
				quinary: {
					DEFAULT: "#f5f6fc",
				},
				senary: {
					DEFAULT: "#1e1e1e",
				},
				septenary: {
					DEFAULT: "#f86822",
				},
			},
			fontFamily: {
				display: "'League Gothic', 'sans-serif'",
				body: "Mulish, 'sans-serif'",
			},
			keyframes: {
				shake: {
					"0%, 44%, 48%, 100%": { transform: "translate3d(0, 0, 0)" },
					"45%": { transform: "translate3d(-4px, 3px, 0)" },
					"46%": { transform: "translate3d(2px, -1px, 0)" },
					"47%": { transform: "translate3d(-3px, 1px, 0)" },
				},
				"unstablize-left": {
					"0%": { left: "0", opacity: "0" },
					"5%": { left: "0", opacity: "0" },
					"6%": { opacity: "0" },

					"10%": { left: "calc(0.5 * (100% - 35%))", opacity: "1" },
					"50%": { left: "calc(0.5 * (100% - 35%))", opacity: "1" },

					"54%": { opacity: "0" },
					"55%": { left: "calc(100% - 35%)", opacity: "0" },
					"100%": { left: "calc(100% - 35%)", opacity: "0" },
				},
				"unstablize-right": {
					"0%": { right: "0", opacity: "0" },
					"25%": { right: "0", opacity: "0" },
					"26%": { opacity: "0" },

					"30%": { right: "calc(0.5 * (100% - 35%))", opacity: "1" },
					"50%": { right: "calc(0.5 * (100% - 35%))", opacity: "1" },

					"54%": { opacity: "0" },
					"55%": { right: "calc(100% - 35%)", opacity: "0" },
					"100%": { right: "calc(100% - 35%)", opacity: "0" },
				},
			},
		},
	},
	plugins: [],
};
