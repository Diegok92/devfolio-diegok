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
							<div class="timeline-item" v-for="n in 4" :key="n">
								<div class="timeline-content">
									<h4 class="experience-title">
										{{ $t(`message.experienceTitle${n}`) }} -
										<span class="company">{{
											$t(`message.experienceCompany${n}`)
										}}</span>
									</h4>
									<p class="experience-location">
										{{ $t(`message.experienceLocation${n}`) }}
									</p>
									<p>{{ $t(`message.experienceDescription${n}`) }}</p>
									<p>
										<strong>{{ $t("message.AchievementsTitle") }}:</strong>
										{{ $t(`message.experienceAchievements${n}`) }}
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
							<div class="education-item" v-for="n in 5" :key="n">
								<h4>
									{{ $t(`message.educationInstitution${n}`) }} -
									<span class="degree">{{
										$t(`message.educationDegree${n}`)
									}}</span>
									({{ $t(`message.educationYears${n}`) }})
								</h4>
							</div>
						</div>

						<!-- Skills Section -->
						<h2 class="text-center mt-5">
							<i class="fas fa-tools"></i>
							{{ $t("message.skillsSectionTitle") }}
						</h2>
						<div class="skills-grid mt-4">
							<div class="skill-card" v-for="(skill, index) in 10" :key="index">
								<i :class="skillIcon(index)"></i>
								<h4>{{ $t(`message.skill${skillTitle(index)}`) }}</h4>
								<p>{{ $t(`message.skill${skillTitle(index)}Details`) }}</p>
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
				<!-- Project Cards (Static) -->
				<div
					class="card shadow-sm project-card"
					v-for="n in 6"
					:key="n"
					data-aos="zoom-in"
				>
					<div class="card-img-container">
						<img
							:src="projectImage(n)"
							class="card-img-top"
							:alt="$t(`message.projectTitle${n}`)"
						/>
					</div>
					<div class="card-body">
						<h5 class="card-title">{{ $t(`message.projectTitle${n}`) }}</h5>
						<p class="card-text">{{ $t(`message.projectDescription${n}`) }}</p>
						<div class="buttons-container">
							<a
								:href="projectLiveUrl(n)"
								target="_blank"
								class="btn btn-live-demo"
							>
								<i class="fas fa-globe"></i> {{ $t("message.viewLiveDemo") }}
							</a>
							<a
								:href="projectRepoUrl(n)"
								target="_blank"
								class="btn btn-repository"
							>
								<i class="fab fa-github"></i>
								{{ $t("message.githubRepository") }}
							</a>
						</div>
					</div>
				</div>
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
	mounted() {
		AOS.init();
	},
	methods: {
		projectImage(n) {
			const images = [
				PreviewMatde,
				PreviewBolsaTrabajos,
				PreviewPokedex,
				PreviewToDoList,
				PreviewValidadorFrontPassword,
				PreviewCalculadora,
			];
			return images[n - 1];
		},
		projectLiveUrl(n) {
			const urls = [
				"https://diegok92.github.io/SegurosMatde/",
				"https://diegok92.github.io/ORT-PNT2-TP-BolsaEmpleo/#/",
				"https://diegok92.github.io/pokedex/",
				"https://diegok92.github.io/ToDoList/",
				"https://diegok92.github.io/PasswordFrontValidation/",
				"https://diegok92.github.io/calculadoraCientifica/",
			];
			return urls[n - 1];
		},
		projectRepoUrl(n) {
			const urls = [
				"https://github.com/Diegok92/SegurosMatde",
				"https://github.com/Diegok92/ORT-PNT2-TP-BolsaEmpleo",
				"https://github.com/Diegok92/pokedex",
				"https://github.com/Diegok92/ToDoList",
				"https://github.com/Diegok92/PasswordFrontValidation",
				"https://github.com/Diegok92/calculadoraCientifica",
			];
			return urls[n - 1];
		},
		skillIcon(index) {
			const icons = [
				"fas fa-image",
				"fas fa-server",
				"fas fa-database",
				"fas fa-project-diagram",
				"fas fa-users",
				"fas fa-laptop-code",
				"fas fa-pie-chart",
				"fas fa-cubes",
				"fas fa-window-restore",
				"fas fa-language",
			];
			return icons[index];
		},
		skillTitle(index) {
			const titles = [
				"FrontendTitle",
				"BackendTitle",
				"DatabasesTitle",
				"MethodologiesTitle",
				"MKTTitle",
				"IDEsTitle",
				"OfficeTitle",
				"DesignTitle",
				"OtherSoftwareTitle",
				"LanguagesTitle",
			];
			return titles[index];
		},
	},
};
</script>

<style scoped>
/* Tu CSS permanece igual, solo se mostraron cambios visuales menores que pueden ser necesarios */
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
/* Otros estilos permanecen igual */
</style>
