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
				<i class="fas fa-laptop-code"></i> Aspiring Full Stack Developer
			</p>
			<p class="lead text-black">
				<i class="fas fa-person-digging"></i> Website Under Construction
				<i class="fas fa-person-digging"></i>
			</p>
		</div>

		<!-- About Section -->
		<div id="about" class="about-section text-center py-5" data-aos="fade-up">
			<h2><i class="fas fa-user"></i> About Me</h2>
			<p class="about-text">
				I am a junior web developer passionate about creating interactive web
				experiences. I enjoy working with JavaScript, Vue.js, and continuously
				learning about new web technologies.
			</p>
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
					image: "https://via.placeholder.com/400x200",
				},
				{
					name: "Mercado Liebre",
					description:
						"A clone of an e-commerce site for educational purposes.",
					url: "https://github.com/Diegok92/mercadoLiebre",
					image: "https://via.placeholder.com/400x200",
				},
				{
					name: "Afrus Test",
					description: "A project developed as part of a technical assessment.",
					url: "https://github.com/Diegok92/afrusTest",
					image: "https://via.placeholder.com/400x200",
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

.about-section {
	background-color: #ffffff;
}

.projects-section {
	background-color: #f8f9fa;
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

.contact-info a {
	display: flex;
	align-items: center;
	text-decoration: none;
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
