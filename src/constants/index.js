import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	bootcampIcon,
	githubIcon,
	freelancerIcon,
	developerIcon,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Personal Projects",
		icon: developerIcon,
		iconBg: "#383E56",
		date: "March 2020 - Present",
		points: [
			"Developed a personal portfolio website using React.js to showcase projects and skills.",
			"Built an AI-Prompts application with Next.js and NextAuth, featuring user authentication and real-time data updates.",
			"Implemented responsive design principles to ensure applications functioned smoothly on various devices.",
			"Collaborated with fellow developers in online communities to improve and refine projects.",
		],
	},
	{
		title: "Open Source Contributor",
		company_name: "GitHub",
		icon: githubIcon,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Present",
		points: [
			"Contributed to open-source projects, focusing on bug fixes and feature enhancements.",
			"Worked with maintainers and other contributors to understand project requirements and deliver solutions.",
			"Learned version control and collaborative development practices using Git and GitHub.",
			"Participated in code reviews and discussions to improve code quality and project outcomes.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Freelance",
		icon: freelancerIcon,
		iconBg: "#383E56",
		date: "Jan 2022 - Present",
		points: [
			"Developed and maintained websites for small businesses using React.js and WordPress.",
			"Worked directly with clients to gather requirements, design mockups, and deliver final products.",
			"Implemented SEO best practices to improve website visibility and search engine ranking.",
			"Ensured cross-browser compatibility and optimized website performance for a better user experience.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Bootcamp Projects",
		icon: bootcampIcon,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Completed a full stack development bootcamp, building web applications with React.js and Node.js.",
			"Created and deployed a full-fledged e-commerce application with a React.js frontend and Node.js backend.",
			"Developed RESTful APIs to handle user authentication, product management, and order processing.",
			"Collaborated with peers on group projects, practicing agile methodologies and team communication.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
