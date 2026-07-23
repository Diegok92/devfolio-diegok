<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects.js";

const { t } = useI18n();
</script>

<template>
	<section id="projects" class="section section--alt">
		<div class="container">
			<SectionHeading
				:eyebrow="t('projects.eyebrow')"
				:title="t('projects.title')"
				:subtitle="t('projects.subtitle')"
			/>

			<div class="projects__grid">
				<ProjectCard
					v-for="project in projects"
					:key="project.id"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.projects__grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--sp-5);
	align-items: stretch;
}

@media (min-width: 640px) {
	.projects__grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (min-width: 1000px) {
	.projects__grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}
</style>
