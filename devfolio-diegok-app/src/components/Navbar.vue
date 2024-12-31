<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm fixed-top"
		:class="{ 'navbar-scrolled': isScrolled }"
	>
		<div class="container-fluid">
			<a class="navbar-brand fw-bold" href="#">Diego K. DevFolio</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link text-white" href="#about">{{
							$t("message.aboutMeTitle")
						}}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#projects">{{
							$t("message.projectsSectionTitle")
						}}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#contact">{{
							$t("message.contact")
						}}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#cv">{{
							$t("message.download_cv")
						}}</a>
					</li>
					<!-- Botón de cambio de idioma -->
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle text-white"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i class="fas fa-globe"></i> {{ currentLanguage }}
						</a>
						<ul class="dropdown-menu dropdown-menu-end">
							<li>
								<a
									class="dropdown-item"
									href="#"
									@click.prevent="changeLanguage('es')"
									>Español</a
								>
							</li>
							<li>
								<a
									class="dropdown-item"
									href="#"
									@click.prevent="changeLanguage('en')"
									>English</a
								>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			currentLanguage: this.$i18n.locale === "es" ? "Español" : "English",
			isScrolled: false,
		};
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		changeLanguage(locale) {
			this.$i18n.locale = locale;
			this.currentLanguage = locale === "es" ? "Español" : "English";
			this.$emit("language-changed", locale);
		},
		handleScroll() {
			this.isScrolled = window.scrollY > 50;
		},
	},
};
</script>

<style scoped>
/* Estilo base del navbar */
.navbar {
	font-size: 1.1em;
	z-index: 1000;
	background: linear-gradient(135deg, #4a90e2, #7b1fa2);
	padding: 0.8rem 1rem;
	transition: background-color 0.3s ease;
}

/* Navbar cuando está scrolleado */
.navbar-scrolled {
	background: rgba(33, 37, 41, 0.9); /* Fondo oscuro semi-transparente */
	backdrop-filter: blur(5px); /* Efecto de desenfoque */
}

/* Estilo de los enlaces */
.nav-link {
	font-size: 1rem;
	font-weight: 500;
	transition: color 0.3s ease;
}

.nav-link:hover {
	color: #ffd700;
}

/* Estilo del menú desplegable */
.dropdown-menu {
	background-color: #4a90e2;
	border: none;
}

.dropdown-item {
	color: white;
	font-size: 0.9rem;
}

.dropdown-item:hover {
	background-color: #7b1fa2;
	color: white;
}

/* Botón de hamburguesa */
.navbar-toggler {
	border: none;
}

.navbar-toggler-icon {
	background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.7%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
