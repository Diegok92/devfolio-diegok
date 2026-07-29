export default {
	meta: {
		title: "Diego Kleiman - Web Developer & Functional Analyst",
		description:
			"Full stack web developer and functional analyst. Process discovery, automation and custom software for small and medium businesses. Certified TiendaNube Partner.",
	},

	nav: {
		about: "About",
		process: "Method",
		experience: "Experience",
		projects: "Projects",
		services: "Services",
		contact: "Contact",
		menu: "Menu",
		theme: "Toggle theme",
		language: "Language",
	},

	hero: {
		available: "Available for new projects",
		greeting: "Hi, I'm",
		name: "Diego Kleiman",
		role: "Full Stack Web Developer",
		role2: "Functional Analyst",
		tagline:
			"I understand the process, document it, and then build it. I come from engineering and I work where the business meets the technology.",
		ctaProjects: "See my work",
		ctaContact: "Get in touch",
		stat1: "stores in production",
		stat2: "years of professional experience",
		stat3: "custom builds delivered",
		stat4: "roles at multinational companies",
	},

	about: {
		eyebrow: "About me",
		title: "Between Business and Technology",
		p1: "I come from mechanical engineering. Five years at Volkswagen, starting as a maintenance engineering intern and finishing as a quality engineering analyst, taught me to look at processes, find where they fail and turn that into something measurable and actionable.",
		p2: "Later, at another company, this time in IT, I worked in Business Intelligence, supporting users from other companies with SAP and SQL Server. That's where it clicked: the hard part is almost never the tool, but understanding what the people asking for something actually need.",
		p3: "Today I work in two worlds. As a freelance developer I build custom solutions and create online stores. And, with two partners, I'm building HCD, a venture bringing automation and management dashboards to small and medium businesses.",
		p4: "What interests me are the projects where you have to understand the business before writing a line of code. I work with clients independently and I also join teams, as a developer or as a functional analyst.",
		locationLabel: "Location",
		focusLabel: "Profile",
		focusValue: "Web development · Functional analysis · Automation",
		studyLabel: "Studies",
		studyInstitution: "ORT",
		study1: "Programmer Analyst - Completed",
		study2: "Systems Analyst - Finishing Dec 2026",
	},

	projects: {
		eyebrow: "Portfolio",
		title: "Projects",
		subtitle:
			"Work for real clients plus tools of my own. Happy to go into the technical detail of any of them — just ask.",
		featured: "Featured",
		viewRepo: "View code",
		viewDemo: "Live site",
		demoPending: "Going live soon",
		wip: "In development",
		noPreview: "Preview coming soon",
		tpenergy: {
			title: "TPEnergy",
			description:
				"Full migration of the store to TiendaNube, with the entire catalogue imported through the API and a design tailored to the client.",
		},
		vorterix: {
			title: "Vorterix Shop",
			description:
				"Apparel and merchandising store handling variants by size and colour.",
		},
		dphidraulica: {
			title: "DP Hidráulica",
			description: "Built the online store and run its day-to-day operation.",
		},
		chatbot: {
			title: "AI-powered WhatsApp assistant",
			description:
				"A bot that handles a shop's WhatsApp enquiries using AI, answering with the business's real data. The point: staff serve and take payment instead of replying to messages.",
		},
		tncrud: {
			title: "Stock admin panel for multiple TiendaNube stores",
			description:
				"An app to import, update and audit catalogues on any TiendaNube store. I built it because doing it by hand doesn't scale.",
		},
		matde: {
			title: "Matde - Insurance brokers",
			description:
				"Corporate website for an international insurance brokerage firm, live on its own domain.",
		},
	},

	resume: {
		eyebrow: "Background",
		title: "Experience & Education",
		experienceTitle: "Professional experience",
		educationTitle: "Education",
		certificationsTitle: "Certifications",
		current: "Current",

		diegokdev: {
			role: "Freelance Web Developer",
			company: "DIEGOKDEVELOPER · HCD",
			location: "Buenos Aires, Argentina",
			description:
				"I build and run online stores, and develop custom solutions: automations, control panels, chatbots and other tailored builds. Always from initial discovery through to production. In parallel, with two partners we're building HCD, a venture bringing automation and management dashboards to SMBs.",
			achievements: [
				"Full catalogue migrations between platforms.",
				"In-house tools and apps built for TiendaNube.",
				"Ongoing administration of live stores.",
				"Development of chatbots, dashboards and analytics.",
			],
		},
		habi: {
			role: "Web Developer & Digital Marketing",
			company: "Habi",
			location: "Buenos Aires, Argentina",
			description:
				"Web development and the technical marketing layer for the agency's client portfolio: corporate sites, admin panels and custom integrations.",
			achievements: [
				"Bridge between clients and the development team: I gather the request, translate it into requirements and follow it through to delivery.",
				"Reusable internal integrations across every account, with bulk product management via API.",
				"Campaign management and measurement (Google Ads, Analytics 4, Tag Manager) and Looker Studio dashboards.",
			],
		},
		seidor: {
			role: "Business Intelligence Analyst",
			company: "Seidor Analytics",
			location: "Buenos Aires, Argentina",
			description:
				"Handled and resolved corporate user tickets across SAP HANA, BW and MS SQL Server.",
			achievements: [
				"Worked directly with business users to understand and scope each requirement.",
				"SQL certification.",
			],
		},
		vwQuality: {
			role: "Engineering Analyst - Quality",
			company: "Volkswagen Argentina",
			location: "Pacheco, Buenos Aires",
			description:
				"Managed production-line quality requirements for the Taos launch and tracked supplier failures across the Assembly, Paint and Body plants.",
			achievements: [
				"Ran regular meetings with cross-functional teams: Logistics, Production and Suppliers.",
				"Defined new quality indicators and automated the tracking reports for several departments.",
				"Criticality and failure-tracking reports that directly reduced rejections and improved stock levels.",
			],
		},
		vwIntern: {
			role: "Engineering Intern - Maintenance",
			company: "Volkswagen Argentina",
			location: "Pacheco, Buenos Aires",
			description:
				"Blueprint design and interpretation, and rollout of 5S, TPM and Kanban across office and plant.",
			achievements: [
				"Certified in Catia V5 and in KUKA VKRC4 industrial robot programming.",
			],
		},

		ortSistemas: {
			institution: "ORT",
			degree: "Systems Analyst",
			note: "In progress",
		},
		ortProgramador: {
			institution: "ORT",
			degree: "Programmer Analyst",
			note: "Degree obtained",
		},
		digitalHouse: {
			institution: "Digital House",
			degree: "Full Stack Web Developer",
			note: "Certification obtained",
			name: "Full Stack Web Developer",
			issuer: "Digital House",
		},
		utnMec: {
			institution: "UTN FRBA",
			degree: "Mechanical Engineering",
			note: "Advanced coursework, not completed",
		},
		utnElectronica: {
			institution: "UTN FRBA",
			degree: "Electronic Engineering",
			note: "Coursework, not completed",
		},
		ortSecundario: {
			institution: "ORT",
			degree: "Technical high school - Electronics",
			note: "",
		},

		tnPartner: {
			name: "Certified TiendaNube Partner",
			issuer: "TiendaNube / Nuvemshop",
		},
		sql: { name: "SQL certification", issuer: "Seidor Analytics" },
		catia: {
			name: "Catia V5 · KUKA VKRC4 industrial robots",
			issuer: "Volkswagen Argentina",
		},
	},

	process: {
		eyebrow: "How I work",
		title: "Understand First, Build Second",
		subtitle:
			"The same method, whether it's custom software or a process improvement.",
		relevar: {
			title: "Discover",
			description:
				"I learn how the team works today, what tools they use and where the real pain is.",
		},
		disenar: {
			title: "Design",
			description:
				"I pick the simplest change with the biggest impact and document it before touching anything.",
		},
		implementar: {
			title: "Build",
			description:
				"I develop the solution and test it against real data before it reaches production.",
		},
		acompanar: {
			title: "Support",
			description:
				"I train the team, measure the result and adjust. A solution nobody uses is worth nothing.",
		},
	},

	skills: {
		eyebrow: "Toolbox",
		title: "Technologies & Skills",
		subtitle: "What I've used and use day to day.",
		functional: "Functional analysis",
		frontend: "Frontend",
		backend: "Backend",
		ecommerce: "E-commerce",
		data: "Data & BI",
		infra: "Tools",
		marketing: "Technical marketing",
		methods: "Methodologies",
		languages: "Languages",
		items: {
			functional: [
				"Requirements gathering",
				"Translating business needs into technical requirements",
				"Process documentation and modeling",
				"User training and support",
			],
			methods: ["Scrum", "Kanban", "Poka-Yoke", "5S", "TPM"],
			ecommerce: [
				"TiendaNube - Custom design and development",
				"Catalog migration",
				"Sales analytics and reports",
				"Chatbot training",
			],
			marketing: [
				"Google Ads",
				"Meta Ads",
				"Google Analytics 4",
				"Google Tag Manager",
				"SemRush",
				"Brevo",
			],
			frontend: ["Vue.js", "JavaScript", "React.js", "HTML5", "CSS3 / SCSS", "Dart / Flutter"],
			backend: ["Node.js", "Express.js", "REST APIs", "Firebase", "PHP", "Java", "C#"],
			data: [
				"MySQL",
				"MS SQL Server",
				"SAP HANA / BW",
				"DataStudio (ex LookerStudio)",
				"Firestore",
				"Dashboards",
			],
			infra: [
				"Git / GitHub",
				"Postman · FileZilla",
				"Cloudflare · Hostinger",
				"ClickUp · Slack · Trello",
				"Figma · Canva",
				"Fluency with AI tools",
			],
		},
	},

	services: {
		eyebrow: "For businesses",
		title: "Want to tidy up your operation or start selling online?",
		subtitle:
			"This is the work I do for clients. If any of it is useful to you, get in touch — no strings attached.",
		cta: "Request a quote",
		stores: {
			title: "Online stores",
			description:
				"I set up your store end to end: design matching your brand, catalogue loaded, payments and shipping configured.",
		},
		migration: {
			title: "Migrations",
			description:
				"I move your catalogue from another platform without losing products, categories or search rankings.",
		},
		automation: {
			title: "Process automation",
			description:
				"I map what you do by hand today and turn it into an automated flow, with alerts and traceability.",
		},
		dashboards: {
			title: "Dashboards & KPIs",
			description:
				"I pull scattered information into clear dashboards so you can decide with data.",
		},
	},

	contact: {
		eyebrow: "Contact",
		title: "Let's Work Together",
		text: "I take on freelance projects and I also join teams, whether as a developer or as a functional analyst. If you have something in mind, reach out however suits you best.",
		email: "Email",
		linkedin: "LinkedIn",
		github: "GitHub",
		whatsapp: "WhatsApp",
	},

	footer: {
		builtWith: "Built with Vue 3 and Vite, no UI frameworks.",
		rights: "All rights reserved.",
		backToTop: "Back to top",
	},

	a11y: {
		skipToContent: "Skip to main content",
		profileAlt: "Photo of Diego Kleiman",
		projectAlt: "Project screenshot",
	},
};
