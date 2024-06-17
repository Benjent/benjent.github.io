export type Tool = {
	name: string;
	logo?: string;
};

export type Company = {
	name: string;
	logo: string;
	logoAlt?: string;
	url?: string;
	location: string;
};

export type Experience = {
	company: Company;
	position: string;
	period: string;
	about: string;
	tasks: string[];
	tools: Tool[];
};

export type Institution = {
	name: string;
	logo: string;
	url?: string;
	location: string;
};

export type Education = {
	institution: Institution;
	diploma: string;
	title: string;
	period: string;
	notes?: string[];
};

export type Project = {
	image: string;
	name: string;
	description: string;
	url?: string;
	conditions: string[];
	tools: Tool[];
};
