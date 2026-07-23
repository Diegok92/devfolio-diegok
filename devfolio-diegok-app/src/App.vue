<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import HeroSection from "./sections/HeroSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import ExperienceSection from "./sections/ExperienceSection.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";
import ProcessSection from "./sections/ProcessSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import { applyDocumentLocale } from "./i18n/index.js";

const { t } = useI18n();

onMounted(() => applyDocumentLocale());
</script>

<template>
	<div class="app-shell">
		<a class="skip-link" href="#main">{{ t("a11y.skipToContent") }}</a>

		<TheNavbar />

		<main id="main">
			<HeroSection />
			<AboutSection />

			<ProcessSection />
			<SkillsSection />
			<ExperienceSection />
			<ProjectsSection />
			<ServicesSection />
			<ContactSection />
		</main>

		<TheFooter />
	</div>
</template>
