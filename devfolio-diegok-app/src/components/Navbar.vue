<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top"
	>
		<div class="container-fluid" id="logo">
			<a class="navbar-brand" href="#">Diego K. DevFolio</a>
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
						<a class="nav-link" href="#about">{{
							$t("message.aboutMeTitle")
						}}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#projects">{{
							$t("message.projectsSectionTitle")
						}}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#contact">{{ $t("message.contact") }}</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#cv">{{ $t("message.download_cv") }}</a>
					</li>
					<!-- Botón de cambio de idioma -->
					<li class="nav-item dropdown ms-3">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i class="fas fa-globe"></i> {{ currentLanguage }}
						</a>
						<ul class="dropdown-menu">
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
		};
	},
	methods: {
		changeLanguage(locale) {
			this.$i18n.locale = locale;
			this.currentLanguage = locale === "es" ? "Español" : "English";
			this.$emit("language-changed", locale);
		},
	},
};
</script>

<style scoped>
.navbar {
	font-size: 1.1em;
	z-index: 1000;
	max-height: 50px;
}

Nav {
	background: linear-gradient(135deg, #007bff, #6610f2);
}

#navbarNav {
	background: linear-gradient(135deg, #007bff, #6610f2);
}
</style>
