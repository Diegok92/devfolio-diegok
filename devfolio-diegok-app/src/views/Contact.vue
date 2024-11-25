<template>
	<div class="home">
		<!-- Hero Section -->
		<div class="hero-section text-center" data-aos="fade-up">
			<img
				src="../assets/profile-picture.jpg"
				alt="Profile Picture"
				class="profile-picture mb-4"
			/>
			<h1 class="text-white"><i class="fas fa-code"></i> Hello, I'm Diego</h1>
			<p class="lead text-white">
				<i class="fas fa-laptop-code"></i> Full Stack Web Developer | BI Analyst
				| Mechanical Engineer
			</p>
		</div>

		<!-- About Section -->
		<div id="about" class="about-section text-center py-5" data-aos="fade-up">
			<h2><i class="fas fa-user"></i> About Me</h2>
			<p class="about-text">
				The pandemic helped me decide to change my career, and I saw programming
				as a great opportunity to grow professionally. I am a responsible,
				diligent person with a great ability to work in a team. I am looking for
				a position that will provide me with new knowledge and allow me to grow
				in this exciting field.
			</p>
		</div>

		<!-- Experience Section -->
		<div id="experience" class="experience-section py-5" data-aos="fade-up">
			<h2 class="text-center">
				<i class="fas fa-briefcase"></i> Professional Experience
			</h2>
			<div class="experience-list text-center">
				<div class="experience-item">
					<h4>
						Software Developer & Digital Marketing - Habi (Remote, 2024 -
						Present)
					</h4>
					<p>
						Web solutions for managing products on TiendaNube, managing Google
						Ads, Analytics, and Tag Manager for multiple clients.
					</p>
					<p>
						<strong>Achievements:</strong> Created a CRUD API to manage products
						for clients on TiendaNube, website creation, and process
						improvements for the team.
					</p>
				</div>
				<div class="experience-item">
					<h4>
						Business Intelligence Analyst - Seidor Analytics (Remote, 2022 -
						2023)
					</h4>
					<p>Handled user tickets with SAP HANA, BW, and SQL Server.</p>
					<p>
						<strong>Achievements:</strong> Completed SQL internal certification.
					</p>
				</div>
				<div class="experience-item">
					<h4>Quality Analyst - Volkswagen Argentina (Pacheco, 2019 - 2021)</h4>
					<p>
						Ensured quality for the Taos model and handled quality indicators
						for Amarok. Support provided to logistics for Amarok and Taos.
					</p>
					<p>
						<strong>Achievements:</strong> Created new indicators, served as a
						reference in my area, and automated quality tracking reports.
					</p>
				</div>
				<div class="experience-item">
					<h4>
						Engineering Intern, Maintenance Area - Volkswagen Argentina
						(Pacheco, 2017 - 2019)
					</h4>
					<p>
						Design and interpretation of plans, implementation of 5S, TPM, Kan
						Ban in office and plant.
					</p>
					<p>
						<strong>Achievements:</strong> Certified in Catia V5 (3D Design) and
						VK RC4 (Robotic Arm Programming).
					</p>
				</div>
			</div>
		</div>

		<!-- Education Section -->
		<div
			id="education"
			class="education-section text-center py-5"
			data-aos="fade-up"
		>
			<h2><i class="fas fa-graduation-cap"></i> Education</h2>
			<ul class="education-list">
				<li><strong>ORT Yatay</strong> - Systems Analyst (2022 - Present)</li>
				<li>
					<strong>UTN FRBA</strong> - Mechanical Engineering (2014 - 2021)
				</li>
				<li>
					<strong>UTN FRBA</strong> - Electronic Engineering (2011 - 2013)
				</li>
				<li>
					<strong>ORT Technical School - Yatay</strong> - Electronic Orientation
					(2005 - 2010)
				</li>
			</ul>
		</div>

		<!-- Skills Section -->
		<div id="skills" class="skills-section text-center py-5" data-aos="fade-up">
			<h2><i class="fas fa-tools"></i> Skills & Technologies</h2>
			<ul class="skills-list">
				<li><strong>Frontend:</strong> HTML, CSS, JavaScript, Vue.js, React</li>
				<li><strong>Backend:</strong> Node.js, Express, Java, C#, SQL</li>
				<li><strong>Databases:</strong> MySQL, CRUD, Table Design</li>
				<li><strong>Methodologies:</strong> Agile (SCRUM), Trello</li>
				<li>
					<strong>Tools:</strong> SAP HANA, Google Ads, Google Analytics, Tag
					Manager
				</li>
				<li>
					<strong>Languages:</strong> Spanish (Native), English (Advanced)
				</li>
			</ul>
		</div>

		<!-- Projects Section -->
		<div id="projects" class="projects-section py-5">
			<h2 class="text-center mb-5" data-aos="fade-up">
				<i class="fas fa-folder-open"></i> Projects
			</h2>
			<div class="d-flex flex-wrap justify-content-center">
				<ProjectCard
					v-for="(project, index) in projects"
					:key="index"
					:project="project"
					data-aos="zoom-in"
				/>
			</div>
		</div>

		<!-- CV Section -->
		<div id="cv" class="cv-section text-center py-5" data-aos="fade-up">
			<h2 class="text-white"><i class="fas fa-file-alt"></i> My CV</h2>
			<p class="lead text-white">
				<i class="fas fa-info-circle"></i> Interested in knowing more about my
				skills and experience?
			</p>
			<a
				:href="`${baseUrl}KleimanDiegoCV.pdf`"
				download
				class="btn btn-outline-light btn-lg mt-3 shadow"
			>
				<i class="fas fa-download"></i> Download My CV
			</a>
		</div>

		<!-- Contact Section -->
		<div id="contact" class="contact-section py-5">
			<div class="container">
				<div class="row">
					<div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
						<h2><i class="fas fa-address-book"></i> Contact Me</h2>
						<p class="lead">
							<i class="fas fa-handshake"></i> Feel free to reach out for
							collaborations, questions, or job opportunities! I am actively
							looking for roles in front-end, back-end, or full stack
							development.
						</p>
					</div>
					<div
						class="col-md-6 d-flex flex-column align-items-center justify-content-center"
					>
						<a
							href="mailto:kleiman.diego@gmail.com"
							class="btn contact-btn btn-primary my-2 shadow"
						>
							<i class="fas fa-envelope"></i> Email Me
						</a>
						<a
							href="https://linkedin.com/in/diego-kleiman92"
							target="_blank"
							class="btn contact-btn btn-linkedin my-2 shadow"
						>
							<i class="fab fa-linkedin"></i> LinkedIn
						</a>
						<a
							href="https://github.com/Diegok92?tab=repositories"
							target="_blank"
							class="btn contact-btn btn-github my-2 shadow"
						>
							<i class="fab fa-github"></i> GitHub
						</a>
						<a
							href="https://wa.me/5491136920026"
							target="_blank"
							class="btn contact-btn btn-whatsapp my-2 shadow"
						>
							<i class="fab fa-whatsapp"></i> WhatsApp
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import PreviewMatde from "../assets/PreviewMatde.png";
import PreviewBolsaTrabajos from "../assets/previewBolsaTrabajos.png";
import PreviewPokedex from "../assets/previewPokedex.png";
import PreviewToDoList from "../assets/previewTo-DoList.png";
import PreviewValidadorFrontPassword from "../assets/PreviewValidadorFrontPassword.png";
import PreviewCalculadora from "../assets/PreviewCalculadora.png";

export default {
	name: "Home",
	components: {
		ProjectCard,
	},
	data() {
		return {
			projects: [
				{
					name: "SegurosMatde",
					description: "A website for a large insurance management.",
					url: "https://github.com/Diegok92/SegurosMatde",
					pagesUrl: "https://diegok92.github.io/SegurosMatde/",
					image: PreviewMatde,
				},
				{
					name: "BolsaTrabajos",
					description: "A website uniting job seekers with employers.",
					url: "https://github.com/Diegok92/ORT-PNT2-TP-BolsaEmpleo",
					pagesUrl: "https://diegok92.github.io/ORT-PNT2-TP-BolsaEmpleo/#/",
					image: PreviewBolsaTrabajos,
				},
				{
					name: "Pokedex",
					description: "A project that allows users to explore Pokémon data.",
					url: "https://github.com/Diegok92/pokedex",
					pagesUrl: "https://diegok92.github.io/pokedex/",
					image: PreviewPokedex,
				},
				{
					name: "ToDo List",
					description: "A simple ToDo List app for managing daily tasks.",
					url: "https://github.com/Diegok92/ToDoList",
					pagesUrl: "https://diegok92.github.io/ToDoList/",
					image: PreviewToDoList,
				},
				{
					name: "Password Front Validator",
					description: "An online strength password frontend validator",
					url: "https://github.com/Diegok92/PasswordFrontValidation",
					pagesUrl: "https://diegok92.github.io/PasswordFrontValidation/",
					image: PreviewValidadorFrontPassword,
				},
				{
					name: "Scientific Calculator & Unit Converter",
					description:
						"An online scientific calculator and a multi-unit converter (imperial & international units)",
					url: "https://github.com/Diegok92/calculadoraCientifica",
					pagesUrl: "https://diegok92.github.io/calculadoraCientifica/",
					image: PreviewCalculadora,
				},
			],
		};
	},
	computed: {
		baseUrl() {
			return import.meta.env.BASE_URL;
		},
	},
	mounted() {
		AOS.init();
	},
};
</script>

<style scoped>
.hero-section {
	background: linear-gradient(135deg, #007bff, #6610f2);
	color: #fff;
	padding: 80px 20px;
}

.profile-picture {
	width: 150px;
	border-radius: 50%;
	border: 5px solid #ffffff;
}

.about-section,
.experience-section,
.skills-section,
.education-section,
.projects-section {
	background-color: #ffffff;
	padding-top: 50px;
	padding-bottom: 50px;
}

.cv-section {
	background: linear-gradient(135deg, #007bff, #6610f2);
	color: #fff;
	padding-top: 50px;
	padding-bottom: 50px;
}

.cv-section a {
	text-transform: uppercase;
	letter-spacing: 1px;
}

.contact-section {
	background-color: #ffffff;
	padding-top: 50px;
	padding-bottom: 50px;
}

.contact-btn {
	width: 80%;
	max-width: 350px;
	font-size: 1.2em;
	font-weight: bold;
	transition: transform 0.2s, box-shadow 0.2s;
}

.contact-btn:hover {
	transform: translateY(-5px);
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-linkedin {
	background-color: #0077b5;
	color: white;
}

.btn-linkedin:hover {
	background-color: #005582;
}

.btn-github {
	background-color: #333;
	color: white;
}

.btn-github:hover {
	background-color: #000;
}

.btn-whatsapp {
	background-color: #25d366;
	color: white;
}

.btn-whatsapp:hover {
	background-color: #1ebc59;
}
</style>
