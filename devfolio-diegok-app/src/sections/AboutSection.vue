<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { social, certifications } from "../data/resume.js";

const { t } = useI18n();

const facts = [
	{ icon: "mapPin", labelKey: "locationLabel", value: social.location },
	{ icon: "sparkles", labelKey: "focusLabel", valueKey: "focusValue" },
	{ icon: "graduation", labelKey: "studyLabel", valueKey: "studyValue" },
];
</script>

<template>
	<section id="about" class="section section--alt">
		<div class="container about">
			<div class="about__main">
				<SectionHeading
					:eyebrow="t('about.eyebrow')"
					:title="t('about.title')"
				/>

				<div class="about__prose" v-reveal="80">
					<p v-for="n in 4" :key="n">{{ t(`about.p${n}`) }}</p>
				</div>
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
				</ul>

				<div class="certs" v-reveal="180">
					<h3 class="certs__title">{{ t("resume.certificationsTitle") }}</h3>
					<ul>
						<li
							v-for="cert in certifications"
							:key="cert.id"
							class="certs__item"
							:class="{ 'certs__item--highlight': cert.highlight }"
						>
							<AppIcon :name="cert.highlight ? 'check' : cert.icon" :size="16" />
							<span>
								<strong>{{ t(`resume.${cert.id}.name`) }}</strong>
								<em>{{ t(`resume.${cert.id}.issuer`) }}</em>
							</span>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	</section>
</template>

<style scoped>
.about {
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
	gap: var(--sp-8);
	align-items: start;
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

.certs {
	margin-top: var(--sp-5);
	padding: var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
}

.certs__title {
	font-size: var(--fs-sm);
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: var(--text-faint);
	margin-bottom: var(--sp-4);
}

.certs__item {
	display: flex;
	gap: var(--sp-3);
	align-items: flex-start;
	color: var(--text-muted);
}

.certs__item + .certs__item {
	margin-top: var(--sp-4);
}

.certs__item svg {
	margin-top: 3px;
	color: var(--text-faint);
}

.certs__item--highlight {
	color: var(--text);
}

.certs__item--highlight svg {
	color: var(--brand);
}

.certs__item strong {
	display: block;
	font-size: var(--fs-sm);
	font-weight: 600;
}

.certs__item em {
	font-size: var(--fs-xs);
	font-style: normal;
	color: var(--text-faint);
}

@media (max-width: 900px) {
	.about {
		grid-template-columns: 1fr;
		gap: var(--sp-6);
	}
}
</style>
