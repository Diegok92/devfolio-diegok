<template>
	<div class="home">
		<!-- Hero Section -->
		<div class="hero-section text-center" data-aos="fade-up">
			<div class="hero-background"></div>
			<img
				src="../assets/profile-picture.jpg"
				alt="Profile Picture"
				class="profile-picture mb-4"
			/>
			<h1 class="text-white">
				<i class="fas fa-code"></i> {{ $t("message.hello") }}
			</h1>
			<p class="lead text-accent">
				{{ $t("message.subtitle") }}
			</p>
		</div>

		<!-- About Section -->
		<div id="about" class="about-section text-center py-5" data-aos="fade-up">
			<div class="about-container mx-auto p-4">
				<h2 class="mb-4">
					<i class="fas fa-user"></i> {{ $t("message.aboutMeTitle") }}
				</h2>
				<p class="about-text">
					<i class="fas fa-quote-left"></i>
					{{ $t("message.aboutMe") }}

					<i class="fas fa-quote-right"></i>
				</p>
			</div>
		</div>

		<!-- Professional Experience & Education & Skills Section -->
		<div
			id="experience-education"
			class="experience-education-section py-5"
			data-aos="fade-up"
		>
			<div class="container">
				<div class="row">
					<!-- Professional Experience Section -->
					<div class="col-md-6">
						<h2 class="text-center mb-4">
							<i class="fas fa-briefcase"></i>
							{{ $t("message.experience") }}
						</h2>
						<div class="timeline">
							<div
								class="timeline-item"
								v-for="(experience, index) in experiences"
								:key="index"
							>
								<div class="timeline-content">
									<h4 class="experience-title">
										{{ experience.title }} -
										<span class="company">{{ experience.company }}</span>
									</h4>
									<p class="experience-location">{{ experience.location }}</p>
									<p>{{ experience.description }}</p>
									<p>
										<strong>{{ $t("message.AchievementsTitle") }}:</strong>
										{{ experience.achievements }}
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Education & Skills Section -->
					<div class="col-md-6">
						<!-- Education Section -->
						<h2 class="text-center mb-4">
							<i class="fas fa-graduation-cap"></i>
							{{ $t("message.education") }}
						</h2>
						<div class="education-list text-center">
							<div
								class="education-item"
								v-for="(education, index) in educationList"
								:key="index"
							>
								<h4>
									{{ education.institution }} -
									<span class="degree">{{ education.degree }}</span> ({{
										education.years
									}})
								</h4>
							</div>
						</div>

						<!-- Skills Section -->
						<h2 class="text-center mt-5">
							<i class="fas fa-tools"></i>
							{{ $t("message.skillsSectionTitle") }}
						</h2>
						<div class="skills-grid mt-4">
							<div
								class="skill-card"
								v-for="(skill, index) in skills"
								:key="index"
							>
								<i :class="skill.icon"></i>
								<h4>{{ skill.title }}</h4>
								<p>{{ skill.details }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Projects Section -->
		<div id="projects" class="projects-section py-5">
			<h2 class="text-center mb-5" data-aos="fade-up">
				<i class="fas fa-folder-open"></i>
				{{ $t("message.projectsSectionTitlePage") }}
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
			<h2 class="text-white">
				<i class="fas fa-file-alt"></i> {{ $t("message.cvSectionTitle") }}
			</h2>
			<p class="lead text-white">
				<i class="fas fa-info-circle"></i> {{ $t("message.cvSectionsubtitle") }}
			</p>
			<a
				href="/devfolio-diegok/KleimanDiegoCV.pdf"
				download
				class="btn btn-outline-light btn-lg mt-3 shadow"
			>
				<i class="fas fa-download"></i> {{ $t("message.cvDownloadButton") }}
			</a>
		</div>

		<!-- Contact Section -->
		<div id="contact" class="contact-section py-5">
			<div class="container">
				<div class="row">
					<div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
						<h2>
							<i class="fas fa-address-book"></i>
							{{ $t("message.contactMeTitle") }}
						</h2>
						<p class="lead">
							<i class="fas fa-handshake"></i> {{ $t("message.contactMeText") }}
						</p>
					</div>
					<div
						class="col-md-6 d-flex flex-column align-items-center justify-content-center"
					>
						<a
							href="mailto:kleiman.diego@gmail.com"
							class="btn contact-btn btn-primary my-2 shadow"
						>
							<i class="fas fa-envelope"></i> Email
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
			experiences: [
				{
					title: "Software Developer & Digital Marketing",
					company: "Habi",
					location: "Remote, 2024 - Present",
					description:
						"Web solutions for managing products on TiendaNube, managing Google Ads, Analytics, and Tag Manager for multiple clients.",
					achievements:
						"Created a CRUD API to manage products for clients on TiendaNube, website creation, and process improvements for the team.",
				},
				{
					title: "Business Intelligence Analyst",
					company: "Seidor Analytics",
					location: "Remote, 2022 - 2023",
					description:
						"Handled user tickets with SAP HANA, BW, and SQL Server software.",
					achievements: "Completed internal SQL certification.",
				},
				{
					title: "Engineering Quality Analyst, Purchased Parts",
					company: "Volkswagen Argentina",
					location: "Pacheco, 2019 - 2021",
					description:
						"Handled line requirements (Blockage, Release, Information); Prepared reports on quality issues for the Taos model and gathered reports on failures from different plants (Assembly, Painting, Body, etc.); conformed, controlled, and tracked damages to VW due to supplier failures for Amarok. Support provided to logistics department, created criticality reports for possible part shortages in the plant based on consumption, stock, and shipments for Amarok and Taos during the pandemic.",
					achievements:
						"Created new indicators and automated quality tracking reports for several departments, served as a reference in my area.",
				},
				{
					title: "Engineering Intern, Maintenance - Body Plant",
					company: "Volkswagen Argentina",
					location: "Pacheco, 2017 - 2019",
					description:
						"Design and interpretation of plans, implementation of 5S, TPM, Kan Ban in the office and plant, gathered and tracked reports on failures and solutions.",
					achievements:
						"Certified in Catia V5 (3D Design) and KUKA VKRC4 (Industrial robot Programming software).",
				},
			],
			educationList: [
				{
					institution: "ORT Yatay",
					degree: "Systems Analyst",
					years: "2022 - Present",
				},
				{
					institution: "Digital House",
					degree: "FullStack Web Dev.",
					years: "2021 - 2022",
				},
				{
					institution: "UTN FRBA",
					degree: "Mechanical Engineering",
					years: "2014 - 2021",
				},
				{
					institution: "UTN FRBA",
					degree: "Electronic Engineering",
					years: "2011 - 2013",
				},
				{
					institution: "ORT Yatay",
					degree: "High School - Electronic",
					years: "2005 - 2010",
				},
			],
			skills: [
				{
					title: "Frontend",
					details: "HTML, CSS, JavaScript, Vue.js, React.js",
					icon: "fas fa-image",
				},
				{
					title: "Backend",
					details: "Node.js, Express.js, Java, C#, APIs",
					icon: "fas fa-server",
				},
				{
					title: "Databases",
					details:
						"MySQL, CRUD, Table Design, SAP HANA, MS SQL Server Management Studio",
					icon: "fas fa-database",
				},
				{
					title: "Methodologies",
					details: "Agile (SCRUM), Trello, ClickUp",
					icon: "fas fa-project-diagram",
				},
				{
					title: "MKT. Tools",
					details: "Google Ads, Google Analytics, Tag Manager, SemRush, Brevo",
					icon: "fas fa-users",
				},
				{
					title: "IDEs",
					details: "Visual Studio Code, Eclipse",
					icon: "fas fa-laptop-code",
				},

				{
					title: "MS Office",
					details: "Excel, Word, PowerPoint",
					icon: "fas fa-pie-chart",
				},
				{
					title: "2D, 3D Design Soft.",
					details: "Catia, SolidWorks, AutoCad",
					icon: "fas fa-cubes",
				},

				{
					title: "Other Software",
					details: "Looker Studio, Postman, MockAPI, FileZilla",
					icon: "fas fa-window-restore",
				},
				{
					title: "Languages",
					details: "Spanish (Native), English (Advanced)",
					icon: "fas fa-language",
				},
			],
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
	mounted() {
		AOS.init();
	},
};
</script>

<style scoped>
.hero-section {
	background: linear-gradient(135deg, #007bff, #6610f2);
	color: #fff;
	padding: 100px 20px;
	position: relative;
}
.hero-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/*background: url("../assets/hero-bg.jpg") center/cover no-repeat;*/
	opacity: 0.2;
}
.profile-picture {
	width: 150px;
	border-radius: 50%;
	border: 5px solid #ffffff;
	position: relative;
	z-index: 1;
}
.about-section {
	background-color: #f8f9fa;
	padding: 60px 20px;
}
.about-container {
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	max-width: 700px;
}
.about-text {
	font-style: italic;
	font-size: 1.1em;
	line-height: 1.6;
}
.experience-education-section .container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.timeline {
	position: relative;
	max-width: 100%;
	margin: 0 auto;
}
.timeline-item {
	margin-bottom: 30px;
	padding-left: 20px;
	border-left: 4px solid #007bff;
	position: relative;
}
.timeline-item::before {
	content: "";
	position: absolute;
	left: -11px;
	top: 10px;
	width: 20px;
	height: 20px;
	background-color: #007bff;
	border-radius: 50%;
}
.timeline-content {
	padding: 10px 20px;
	background: #f8f9fa;
	position: relative;
	border-radius: 6px;
}
.experience-title {
	font-size: 1.2em;
	font-weight: bold;
}
.company {
	color: #007bff;
}
.education-list {
	margin-top: 20px;
}
.education-item .degree {
	color: #007bff; /* Color modificado para los títulos de los grados */
}
.skills-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	margin-top: 20px;
}
.skill-card {
	background: #fff;
	padding: 20px;
	text-align: center;
	border-radius: 8px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.skill-card:hover {
	transform: translateY(-10px);
	box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}
.skill-card h4 {
	color: #007bff; /* Color modificado para los títulos */
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
.btn-github {
	background-color: #333;
	color: white;
}
.btn-whatsapp {
	background-color: #25d366;
	color: white;
}
</style>
