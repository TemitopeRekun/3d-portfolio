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
	modernrestaurantwebsite,
	aisummaryapp,
	cryptoverse,
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
			"I thought it was impossible to make a website as beautiful as our product, but Temi proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Temi does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Temi optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Ai-summary app",
		description:
			"The AI-Summary App is an advanced tool designed to streamline the way you consume and understand large volumes of text. Whether you're a student, professional, or avid reader, the AI-Summary App helps you save time and focus on what's important by providing quick insights without sacrificing key details.",
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
		image: aisummaryapp,
		source_code_link: "https://github.com/TemitopeRekun/AI-Summary-App",
	},
	{
		name: "Modern Restaurant Website",
		description:
			"The sleek and intuitive website offers a seamless way to explore delectable menu, make reservations, and stay updated on the latest events and promotions. Designed with the user in mind, our site features high-quality images, detailed descriptions, and an easy-to-navigate layout that brings our vibrant atmosphere to your screen.",
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
		image: modernrestaurantwebsite,
		source_code_link:
			"https://github.com/TemitopeRekun/Modern-Restaurant-Website-using-React.js",
	},
	{
		name: "Cryptoverse",
		description:
			"Explore the ever-evolving world of cryptocurrency with Cryptoverse, a dynamic platform offering real-time market data, insightful analysis, and the latest news on various digital assets. Stay informed and make smarter investment decisions with our comprehensive and user-friendly interface.",
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
		image: cryptoverse,
		source_code_link: "https://github.com/TemitopeRekun/crypto-app-reactjs",
	},
];

export { services, technologies, experiences, testimonials, projects };
