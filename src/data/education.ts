import type { Education } from "../types";

const education: Education[] = [
	{
		title: "Computer Science, Multimedia and Network",
		diploma: "engineering diploma",
		period: "2015 - 2018",
		institution: {
			name: "ENSSAT Lannion",
			location: "France",
			logo: "enssat.png",
			url: "https://www.enssat.fr/",
		},
		notes: ["Apprenticeship studies with Naval Group"],
	},
	{
		title: "Multimedia and Web Professions",
		diploma: "technology degree",
		period: "2013 - 2015",
		institution: {
			name: "Dijon University Institute of Technology",
			location: "France",
			logo: "iut-dijon.png",
			url: "https://iutdijon.u-bourgogne.fr/www/formations/buts/but-mmi.html",
		},
	},
	{
		title: "Science",
		diploma: "A levels",
		period: "2010 - 2013",
		institution: {
			name: "Lycée International Charles de Gaulle, Dijon",
			location: "France",
			logo: "de-gaulle.png",
			url: "http://www.lycee-internationalcdg.fr/",
		},
	},
];

export default education;
