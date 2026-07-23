export default {
	meta: {
		title: "Diego Kleiman — Desarrollador Web y Analista Funcional",
		description:
			"Desarrollador web full stack y analista funcional. Relevamiento de procesos, automatización y desarrollo de soluciones para PyMEs. Partner certificado de TiendaNube.",
	},

	nav: {
		about: "Sobre mí",
		process: "Método",
		experience: "Experiencia",
		projects: "Proyectos",
		services: "Servicios",
		contact: "Contacto",
		menu: "Menú",
		theme: "Cambiar tema",
		language: "Idioma",
	},

	hero: {
		available: "Disponible para nuevos proyectos",
		greeting: "Hola, soy",
		name: "Diego Kleiman",
		role: "Desarrollador Web Full Stack",
		role2: "Analista Funcional",
		tagline:
			"Entiendo el proceso, lo documento y después lo construyo. Vengo de la ingeniería y trabajo en el punto donde el negocio se encuentra con la tecnología.",
		ctaProjects: "Ver mi trabajo",
		ctaContact: "Contactame",
		stat1: "tiendas en producción",
		stat2: "años de experiencia profesional",
	},

	about: {
		eyebrow: "Sobre mí",
		title: "Entre el negocio y la tecnología",
		p1: "Vengo de la ingeniería mecánica. Cuatro años en Volkswagen —primero como pasante en mantenimiento, después como analista de calidad— me enseñaron a mirar un proceso, encontrar dónde se rompe y traducirlo en algo medible.",
		p2: "Después pasé a Business Intelligence, atendiendo a usuarios de empresas sobre SAP y SQL Server. Ahí terminé de entender que lo difícil casi nunca es la herramienta: es entender qué necesita realmente la persona que te está pidiendo algo.",
		p3: "Hoy trabajo en las dos puntas. Como desarrollador freelance construyo y administro tiendas online, y junto a dos socios estoy armando HCD, un proyecto para llevar automatización, chatbots con IA y tableros de gestión a las PyMEs.",
		p4: "Me interesan los proyectos donde haya que entender el negocio antes de escribir una línea de código. Trabajo con clientes de forma independiente y también me sumo a equipos, como desarrollador o como analista funcional.",
		locationLabel: "Ubicación",
		focusLabel: "Perfil",
		focusValue: "Desarrollo web · Análisis funcional · Automatización",
		studyLabel: "Estudios",
		studyValue:
			"Analista Programador (ORT) — titulado · cursando Analista de Sistemas",
	},

	projects: {
		eyebrow: "Portfolio",
		title: "Proyectos",
		subtitle:
			"Trabajo para clientes reales y herramientas propias. Si querés el detalle técnico de cualquiera, preguntame.",
		featured: "Destacado",
		viewRepo: "Ver código",
		viewDemo: "Ver online",
		demoPending: "Próximamente online",
		wip: "En desarrollo",
		noPreview: "Vista previa en camino",
		tpenergy: {
			title: "TPEnergy",
			description:
				"Migración completa de la tienda a TiendaNube, con el catálogo entero cargado por API y el diseño personalizado a medida del cliente.",
		},
		vorterix: {
			title: "Vorterix Shop",
			description:
				"Tienda de indumentaria y merchandising con manejo de variantes por talle y color.",
		},
		dphidraulica: {
			title: "DP Hidráulica",
			description:
				"Desarrollo de la tienda online y administración continua de la operación.",
		},
		chatbot: {
			title: "Asistente de WhatsApp con IA",
			description:
				"Bot que atiende las consultas de un local por WhatsApp usando IA, respondiendo con los datos reales del negocio. La idea: que el empleado se dedique a servir y cobrar, no a contestar mensajes.",
		},
		tncrud: {
			title: "Panel de admin de stock de múltiples TiendasNube",
			description:
				"App para cargar, actualizar y auditar catálogos de cualquier tienda TiendaNube. La construí porque hacerlo a mano no escala.",
		},
		scraper: {
			title: "Scrapeador de marketplaces",
			description:
				"Extractor de productos ya publicados en un marketplace: recorre el catálogo, arma la ficha de cada producto y deja los datos listos para importar en otra plataforma.",
		},
		matde: {
			title: "Matde — Productores de seguros",
			description:
				"Sitio institucional para una empresa internacional de productores de seguros, en producción bajo su propio dominio.",
		},
		bolsaEmpleo: {
			title: "Bolsa de Empleo",
			client: "Proyecto académico",
			description:
				"Plataforma que conecta personas que buscan trabajo con empleadores, con CRUD completo de usuarios y avisos.",
		},
	},

	resume: {
		eyebrow: "Trayectoria",
		title: "Experiencia y formación",
		experienceTitle: "Experiencia profesional",
		educationTitle: "Formación",
		certificationsTitle: "Certificaciones",
		current: "Actual",

		hcd: {
			role: "Socio · Analista Funcional",
			company: "HCD",
			location: "CABA, Argentina",
			description:
				"Proyecto propio junto a dos socios para llevar automatización de procesos, chatbots con IA y tableros de gestión a PyMEs. Estamos en etapa de propuesta y primeros pilotos.",
			achievements: [
				"Definición de la propuesta de servicios y del material de presentación.",
				"Relevamiento de necesidades con los primeros interesados y traducción a soluciones concretas.",
				"Desarrollo del primer piloto: un asistente de WhatsApp con IA, incluida su infraestructura.",
			],
		},
		diegokdev: {
			role: "Desarrollador Web Freelance",
			company: "DIEGOKDEVELOPER",
			location: "CABA, Argentina · Remoto",
			description:
				"Desarrollo y administro tiendas online para PyMEs, del relevamiento inicial a la puesta en producción y el mantenimiento.",
			achievements: [
				"Partner certificado de TiendaNube.",
				"Migración de catálogos completos entre plataformas, con herramientas propias.",
				"Administración continua de tiendas en producción: DP Hidráulica, Exxit, Motoverde, TP Energy y Vorterix.",
			],
		},
		habi: {
			role: "Desarrollador Web y Marketing Digital",
			company: "Habi",
			location: "CABA, Argentina",
			description:
				"Desarrollo web y capa técnica de marketing para la cartera de clientes de la agencia: sitios institucionales, paneles de administración e integraciones a medida.",
			achievements: [
				"Nexo entre los clientes y el equipo de desarrollo: relevo el pedido, lo traduzco a requerimientos y hago el seguimiento hasta la entrega.",
				"Integraciones internas reutilizables para todas las cuentas, con gestión masiva de productos vía API.",
				"Gestión y medición de campañas (Google Ads, Analytics 4, Tag Manager) y tableros en Looker Studio.",
			],
		},
		seidor: {
			role: "Analista de Inteligencia de Negocios (BI)",
			company: "Seidor Analytics",
			location: "CABA, Argentina",
			description:
				"Atención y resolución de tickets de usuarios de empresas sobre SAP HANA, BW y MS SQL Server.",
			achievements: [
				"Interlocución directa con usuarios de negocio para entender y acotar cada requerimiento.",
				"Certificación en SQL.",
			],
		},
		vwQuality: {
			role: "Analista de Ingeniería — Calidad",
			company: "Volkswagen Argentina",
			location: "Pacheco, Buenos Aires",
			description:
				"Gestión de requerimientos de calidad en línea de producción para el lanzamiento del Taos y seguimiento de fallas de proveedores entre las plantas de Montaje, Pintura y Carrocería.",
			achievements: [
				"Coordinación de reuniones periódicas con equipos multifuncionales: Logística, Producción y Proveedores.",
				"Definición de nuevos indicadores de calidad y automatización de los reportes de seguimiento de varios departamentos.",
				"Informes de criticidad y seguimiento de fallas, con impacto directo en la reducción de rechazos y la optimización del stock.",
			],
		},
		vwIntern: {
			role: "Pasante de Ingeniería — Mantenimiento",
			company: "Volkswagen Argentina",
			location: "Pacheco, Buenos Aires",
			description:
				"Diseño e interpretación de planos e implementación de 5S, TPM y Kanban en oficina y planta.",
			achievements: [
				"Certificaciones en Catia V5 y en programación de robots industriales KUKA VKRC4.",
			],
		},

		ortSistemas: {
			institution: "ORT",
			degree: "Analista de Sistemas",
			note: "En curso — me quedan 3 materias para el título",
		},
		ortProgramador: {
			institution: "ORT",
			degree: "Analista Programador",
			note: "Título obtenido",
		},
		digitalHouse: {
			institution: "Digital House",
			degree: "Desarrollo Web Full Stack",
			note: 'Proyecto final: "Marketplace de Servicios", una SPA completa con API propia',
		},
		utnMec: {
			institution: "UTN FRBA",
			degree: "Ingeniería Mecánica",
			note: "Cursada avanzada, no finalizada",
		},
		ortSecundario: {
			institution: "ORT",
			degree: "Secundario técnico — Electrónica",
			note: "",
		},

		tnPartner: {
			name: "Partner certificado de TiendaNube",
			issuer: "TiendaNube / Nuvemshop",
		},
		sql: { name: "Certificación en SQL", issuer: "Seidor Analytics" },
		catia: {
			name: "Catia V5 · Robots industriales KUKA VKRC4",
			issuer: "Volkswagen Argentina",
		},
	},

	process: {
		eyebrow: "Cómo trabajo",
		title: "Primero entender, después construir",
		subtitle:
			"El mismo método, sea un desarrollo a medida o una mejora de proceso.",
		relevar: {
			title: "Relevar",
			description:
				"Entiendo cómo trabajan hoy, qué herramientas usan y dónde está el dolor real.",
		},
		disenar: {
			title: "Diseñar",
			description:
				"Priorizo la mejora más simple con mayor impacto y la dejo documentada antes de tocar nada.",
		},
		implementar: {
			title: "Implementar",
			description:
				"Desarrollo la solución y la pruebo con datos reales antes de que llegue a producción.",
		},
		acompanar: {
			title: "Acompañar",
			description:
				"Capacito al equipo, mido el resultado y ajusto. Una solución que nadie usa no sirve.",
		},
	},

	skills: {
		eyebrow: "Herramientas",
		title: "Tecnologías y habilidades",
		subtitle: "Lo que uso hoy, ordenado por lo que más peso tiene en mi día.",
		functional: "Análisis funcional",
		frontend: "Frontend",
		backend: "Backend",
		ecommerce: "E-commerce",
		data: "Datos y BI",
		infra: "Infraestructura y herramientas",
		marketing: "Marketing técnico",
		methods: "Metodologías",
		languages: "Idiomas",
	},

	services: {
		eyebrow: "Para empresas",
		title: "¿Tenés un negocio y querés ordenarlo o venderlo online?",
		subtitle:
			"Estos son los trabajos que hago para clientes. Si algo te sirve, escribime y lo charlamos sin compromiso.",
		cta: "Pedime un presupuesto",
		stores: {
			title: "Tiendas online",
			description:
				"Monto tu tienda de punta a punta: diseño acorde a tu marca, catálogo cargado, medios de pago y envíos configurados.",
		},
		migration: {
			title: "Migraciones",
			description:
				"Te paso el catálogo desde otra plataforma sin perder productos, categorías ni posicionamiento.",
		},
		automation: {
			title: "Automatización de procesos",
			description:
				"Relevo lo que hoy hacés a mano y lo convierto en un flujo automático, con alertas y trazabilidad.",
		},
		dashboards: {
			title: "Tableros e indicadores",
			description:
				"Junto la información dispersa en tableros claros para que puedas decidir con datos.",
		},
	},

	contact: {
		eyebrow: "Contacto",
		title: "Trabajemos juntos",
		text: "Tomo proyectos como freelance y también me sumo a equipos, sea como desarrollador o como analista funcional. Si tenés algo en mente, escribime por donde te quede más cómodo.",
		email: "Email",
		linkedin: "LinkedIn",
		github: "GitHub",
		whatsapp: "WhatsApp",
	},

	footer: {
		builtWith: "Hecho con Vue 3 y Vite, sin frameworks de UI.",
		rights: "Todos los derechos reservados.",
		backToTop: "Volver arriba",
	},

	a11y: {
		skipToContent: "Saltar al contenido principal",
		profileAlt: "Foto de Diego Kleiman",
		projectAlt: "Captura del proyecto",
	},
};
