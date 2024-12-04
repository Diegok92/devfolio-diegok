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
			<p class="lead text-accent">{{ $t("message.subtitle") }}</p>
		</div>

		<!-- About Section -->
		<div id="about" class="about-section text-center py-5" data-aos="fade-up">
			<div class="about-container mx-auto p-4">
				<h3 class="mb-4">
					<i class="fas fa-user me-2"></i> {{ $t("message.aboutMeTitle") }}
				</h3>
				<p class="about-text">
					<i class="fas fa-quote-left"></i>
					{{ $t("message.aboutMe") }}
					<i class="fas fa-quote-right"></i>
				</p>
			</div>
		</div>

		<!-- Professional Experience Section -->
		<div
			id="experience-education"
			class="experience-education-section py-5"
			data-aos="fade-up"
		>
			<div class="container">
				<div class="row">
					<!-- Experience Toggle Section -->
					<div class="col-md-6">
						<h2
							class="text-center mb-4 toggle-header"
							@click="toggleExperience"
						>
							<i class="fas fa-briefcase me-2"></i>
							{{ $t("message.experience") }}
							<i
								:class="
									isExperienceOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
								"
							></i>
						</h2>
						<div v-if="isExperienceOpen" class="timeline">
							<div v-for="n in 4" :key="n" class="timeline-item">
								<div class="timeline-content">
									<h4 class="experience-title">
										{{ $t(`message.experienceTitle${n}`) }} |
										<span class="company">{{
											$t(`message.experienceCompany${n}`)
										}}</span>
									</h4>
									<p class="experience-location">
										{{ $t(`message.experienceLocation${n}`) }}
									</p>
									<p>
										<strong>{{ $t("message.experienceTitle") }}:</strong>
									</p>
									<p>{{ $t(`message.experienceDescription${n}`) }}</p>
									<p>
										<strong>{{ $t("message.AchievementsTitle") }}:</strong>
									</p>
									<p>{{ $t(`message.experienceAchievements${n}`) }}</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Education Toggle Section -->
					<div class="col-md-6">
						<h2 class="text-center mb-4 toggle-header" @click="toggleEducation">
							<i class="fas fa-graduation-cap me-2"></i>
							{{ $t("message.education") }}
							<i
								:class="
									isEducationOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
								"
							></i>
						</h2>
						<div v-if="isEducationOpen" class="education-container mx-auto p-4">
							<div class="education-list text-center">
								<div v-for="n in 5" :key="n" class="education-item">
									<h5>
										{{ $t(`message.educationInstitution${n}`) }} -
										<span class="degree">{{
											$t(`message.educationDegree${n}`)
										}}</span>
										({{ $t(`message.educationYears${n}`) }})
									</h5>
								</div>
							</div>
						</div>

						<!-- Skills Toggle Section -->
						<h2 class="text-center mt-5 toggle-header" @click="toggleSkills">
							<i class="fas fa-tools me-2"></i>
							{{ $t("message.skillsSectionTitle") }}
							<i
								:class="
									isSkillsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
								"
							></i>
						</h2>
						<div v-if="isSkillsOpen" class="skills-grid mt-4">
							<div
								v-for="(detailKey, titleKey) in skillMapping"
								:key="titleKey"
								class="skill-card"
							>
								<i :class="iconMap[titleKey]"></i>
								<h4>{{ $t(`message.${titleKey}`) }}</h4>
								<p>{{ $t(`message.${detailKey}`) }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Projects Toggle Section -->
		<div id="projects" class="projects-section py-5">
			<h2 class="text-center mb-5 toggle-header" @click="toggleProjects">
				<i class="fas fa-folder-open me-2"></i>
				{{ $t("message.projectsSectionTitlePage") }}
				<i
					:class="isProjectsOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
				></i>
			</h2>
			<div
				v-if="isProjectsOpen"
				class="d-flex flex-wrap justify-content-center"
			>
				<ProjectCard
					v-for="n in 6"
					:key="n"
					:project="{
						name: $t(`message.projectTitle${n}`),
						description: $t(`message.projectDescription${n}`),
						url: projectLinks[n - 1].url,
						pagesUrl: projectLinks[n - 1].pagesUrl,
						image: projectImages[n - 1],
					}"
					data-aos="zoom-in"
				/>
			</div>
		</div>

		<!-- CV Section -->
		<div id="cv" class="cv-section text-center py-5" data-aos="fade-up">
			<h2 class="text-white">
				<i class="fas fa-file-alt me-2"></i>
				{{ $t("message.cvSectionTitle") }}
			</h2>
			<p class="lead text-white">
				<i class="fas fa-info-circle"></i> {{ $t("message.cvSectionsubtitle") }}
			</p>
			<a
				:href="cvUrl"
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
							<i class="fas fa-address-book me-2"></i>
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
	props: {
		currentLocale: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isExperienceOpen: false,
			isEducationOpen: false,
			isSkillsOpen: false,
			isProjectsOpen: false,
			skillMapping: {
				skillFrontendTitle: "skillFrontendDetails",
				skillBackendTitle: "skillBackendDetails",
				skillDatabasesTitle: "skillDatabasesDetails",
				skillMethodologiesTitle: "skillMethodologiesDetails",
				skillMKTTitle: "skillMKTDetails",
				skillIDEsTitle: "skillIDEsDetails",
				skillOfficeTitle: "skillOfficeDetails",
				skillDesignTitle: "skillDesignDetails",
				skillManagemntTitle: "skillManagemntTitleDetails",
				skillOtherSoftwareTitle: "skillOtherSoftwareDetails",
				skillLanguagesTitle: "skillLanguagesDetails",
				skillSoftTitle: "skillSoftDetails",
			},
			iconMap: {
				skillFrontendTitle: "fas fa-image",
				skillBackendTitle: "fas fa-server",
				skillDatabasesTitle: "fas fa-database",
				skillMethodologiesTitle: "fas fa-project-diagram",
				skillMKTTitle: "fas fa-shopping-cart",
				skillIDEsTitle: "fas fa-laptop-code",
				skillOfficeTitle: "fas fa-pie-chart",
				skillDesignTitle: "fas fa-cubes",
				skillOtherSoftwareTitle: "fas fa-window-restore",
				skillLanguagesTitle: "fas fa-language",
				skillManagemntTitle: "fas fa-sitemap",
				skillSoftTitle: "fas fa-users",
			},
			projectImages: [
				PreviewMatde,
				PreviewBolsaTrabajos,
				PreviewPokedex,
				PreviewToDoList,
				PreviewValidadorFrontPassword,
				PreviewCalculadora,
			],
			projectLinks: [
				{
					url: "https://github.com/Diegok92/SegurosMatde",
					pagesUrl: "https://diegok92.github.io/SegurosMatde/",
				},
				{
					url: "https://github.com/Diegok92/ORT-PNT2-TP-BolsaEmpleo",
					pagesUrl: "https://diegok92.github.io/ORT-PNT2-TP-BolsaEmpleo/#/",
				},
				{
					url: "https://github.com/Diegok92/pokedex",
					pagesUrl: "https://diegok92.github.io/pokedex/",
				},
				{
					url: "https://github.com/Diegok92/ToDoList",
					pagesUrl: "https://diegok92.github.io/ToDoList/",
				},
				{
					url: "https://github.com/Diegok92/PasswordFrontValidation",
					pagesUrl: "https://diegok92.github.io/PasswordFrontValidation/",
				},
				{
					url: "https://github.com/Diegok92/calculadoraCientifica",
					pagesUrl: "https://diegok92.github.io/calculadoraCientifica/",
				},
			],
		};
	},
	computed: {
		cvUrl() {
			// retorna CV segun el idioma seleccionado
			return this.currentLocale === "en"
				? "/devfolio-diegok/KleimanDiegoCV_Eng.pdf"
				: "/devfolio-diegok/KleimanDiegoCV.pdf";
		},
	},
	mounted() {
		AOS.init();
	},
	methods: {
		toggleExperience() {
			this.isExperienceOpen = !this.isExperienceOpen;
		},
		toggleEducation() {
			this.isEducationOpen = !this.isEducationOpen;
		},
		toggleSkills() {
			this.isSkillsOpen = !this.isSkillsOpen;
		},
		toggleProjects() {
			this.isProjectsOpen = !this.isProjectsOpen;
		},
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
.toggle-header,
.projects-header {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5em;
	gap: 8px;
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
	color: #007bff;
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
	color: #007bff;
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
.education-container {
	background: #f8f9fa;
	border-radius: 8px;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	max-width: 700px;
	padding: 20px;
	margin: 0 auto 30px auto;
}
</style>
