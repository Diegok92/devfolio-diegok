<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { social } from "../data/resume.js";

const { t } = useI18n();

const facts = [
	{ icon: "mapPin", labelKey: "locationLabel", value: social.location },
	{ icon: "sparkles", labelKey: "focusLabel", valueKey: "focusValue" },
];
</script>

<template>
	<section id="about" class="section section--alt">
		<div class="container about">
			<SectionHeading
				class="about__head"
				wide
				:eyebrow="t('about.eyebrow')"
				:title="t('about.title')"
			/>

			<div class="about__prose" v-reveal="80">
				<p v-for="n in 4" :key="n">{{ t(`about.p${n}`) }}</p>
			</div>

			<aside class="about__aside">
				<ul class="facts" v-reveal="120">
					<li v-for="fact in facts" :key="fact.labelKey" class="facts__item">
						<span class="facts__icon"><AppIcon :name="fact.icon" :size="18" /></span>
						<span class="facts__body">
							<span class="facts__label">{{ t(`about.${fact.labelKey}`) }}</span>
							<span class="facts__value">
								{{ fact.value ?? t(`about.${fact.valueKey}`) }}
							</span>
						</span>
					</li>

					<li class="facts__item">
						<span class="facts__icon"><AppIcon name="graduation" :size="18" /></span>
						<span class="facts__body">
							<span class="facts__label">{{ t("about.studyLabel") }}</span>
							<span class="facts__value facts__study">
								<span class="facts__study-item">{{ t("about.study1") }}</span>
								<span class="facts__study-item">{{ t("about.study2") }}</span>
								<span class="facts__study-item">{{ t("about.study3") }}</span>
								<span class="facts__study-item">{{ t("about.study4") }}</span>
							</span>
						</span>
					</li>
				</ul>
			</aside>
		</div>
	</section>
</template>

<style scoped>
.about {
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
	column-gap: var(--sp-8);
	row-gap: 0;
	align-items: start;
}

.about > .about__head {
	grid-column: 1 / -1;
	margin-bottom: var(--sp-6);
}

.about__aside {
	align-self: start;
}

.about__prose p + p {
	margin-top: var(--sp-4);
}

.about__prose p {
	color: var(--text-muted);
	font-size: var(--fs-md);
}

.about__prose p:first-child {
	font-size: var(--fs-lg);
	color: var(--text);
}

.facts {
	display: grid;
	gap: var(--sp-1);
	padding: var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	box-shadow: var(--shadow-sm);
}

.facts__item {
	display: flex;
	gap: var(--sp-4);
	align-items: flex-start;
	padding-block: var(--sp-3);
}

.facts__item + .facts__item {
	border-top: 1px solid var(--border);
}

.facts__icon {
	display: grid;
	place-items: center;
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	border-radius: var(--radius-sm);
	background: var(--brand-soft);
	color: var(--brand);
}

.facts__body {
	display: flex;
	flex-direction: column;
	min-width: 0;
}

.facts__label {
	font-size: var(--fs-xs);
	text-transform: uppercase;
	letter-spacing: 0.07em;
	color: var(--text-faint);
}

.facts__value {
	font-size: var(--fs-sm);
	font-weight: 500;
	line-height: 1.45;
}

.facts__study {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.facts__study-item {
	font-weight: 400;
	color: var(--text-muted);
}

@media (max-width: 900px) {
	.about {
		grid-template-columns: 1fr;
		gap: var(--sp-6);
	}
}
</style>
