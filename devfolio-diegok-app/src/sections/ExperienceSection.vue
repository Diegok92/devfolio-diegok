<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { experience, education } from "../data/resume.js";

const { t, tm, rt, locale } = useI18n();

const periodOf = (item) => (locale.value === "en" ? item.periodEn : item.period);

function achievementsOf(id) {
	const list = tm(`resume.${id}.achievements`);
	return Array.isArray(list) ? list.map((item) => rt(item)) : [];
}
</script>

<template>
	<section id="experience" class="section">
		<div class="container">
			<SectionHeading
				:eyebrow="t('resume.eyebrow')"
				:title="t('resume.title')"
			/>

			<div class="resume">

				<div class="resume__col">
					<h3 class="resume__col-title" v-reveal>
						<AppIcon name="briefcase" :size="18" />
						{{ t("resume.experienceTitle") }}
					</h3>

					<ol class="timeline">
						<li
							v-for="(job, i) in experience"
							:key="job.id"
							class="timeline__item"
							v-reveal="i * 60"
						>
							<span class="timeline__marker" :class="{ 'is-current': job.current }">
								<AppIcon :name="job.icon" :size="15" />
							</span>

							<div class="timeline__card">
								<div class="timeline__meta">
									<span class="timeline__period mono">{{ periodOf(job) }}</span>
									<span v-if="job.current" class="timeline__chip">
										{{ t("resume.current") }}
									</span>
								</div>

								<h4 class="timeline__role">{{ t(`resume.${job.id}.role`) }}</h4>
								<p class="timeline__company">
									{{ t(`resume.${job.id}.company`) }}
									<span class="timeline__sep" aria-hidden="true">·</span>
									<span class="timeline__location">
										{{ t(`resume.${job.id}.location`) }}
									</span>
								</p>

								<p class="timeline__description">
									{{ t(`resume.${job.id}.description`) }}
								</p>

								<ul class="timeline__achievements">
									<li v-for="(item, k) in achievementsOf(job.id)" :key="k">
										<AppIcon name="check" :size="14" />
										<span>{{ item }}</span>
									</li>
								</ul>
							</div>
						</li>
					</ol>
				</div>

				<div class="resume__col resume__col--narrow">
					<h3 class="resume__col-title" v-reveal>
						<AppIcon name="graduation" :size="18" />
						{{ t("resume.educationTitle") }}
					</h3>

					<ul class="education">
						<li
							v-for="(item, i) in education"
							:key="item.id"
							class="education__item"
							v-reveal="i * 60"
						>
							<span class="education__period mono">{{ periodOf(item) }}</span>
							<h4 class="education__degree">
								{{ t(`resume.${item.id}.degree`) }}
							</h4>
							<p class="education__institution">
								{{ t(`resume.${item.id}.institution`) }}
							</p>
							<p v-if="t(`resume.${item.id}.note`)" class="education__note">
								{{ t(`resume.${item.id}.note`) }}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.resume {
	display: grid;
	grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
	gap: var(--sp-8);
	align-items: start;
}

.resume__col-title {
	display: flex;
	align-items: center;
	gap: var(--sp-3);
	font-size: var(--fs-sm);
	text-transform: uppercase;
	letter-spacing: 0.09em;
	color: var(--text-faint);
	margin-bottom: var(--sp-6);
	padding-bottom: var(--sp-3);
	border-bottom: 1px solid var(--border);
}

.timeline {
	position: relative;
	display: grid;
	gap: var(--sp-5);
	padding-left: var(--sp-7);
}

.timeline::before {
	content: "";
	position: absolute;
	left: 17px;
	top: 8px;
	bottom: 8px;
	width: 2px;
	background: linear-gradient(
		to bottom,
		var(--brand) 0%,
		var(--border) 45%,
		var(--border) 100%
	);
	border-radius: 2px;
}

.timeline__item {
	position: relative;
}

.timeline__marker {
	position: absolute;
	left: calc(var(--sp-7) * -1);
	top: 2px;
	display: grid;
	place-items: center;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: var(--bg);
	border: 2px solid var(--border);
	color: var(--text-faint);
	z-index: 1;
}

.timeline__marker.is-current {
	border-color: var(--brand);
	/* Opaco (no translúcido) para que la línea del timeline no se vea a través */
	background: color-mix(in srgb, var(--brand) 16%, var(--bg));
	color: var(--brand);
}

.timeline__card {
	padding: var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	transition: border-color 0.25s var(--ease);
}

.timeline__item:hover .timeline__card {
	border-color: var(--border-strong);
}

.timeline__meta {
	display: flex;
	align-items: center;
	gap: var(--sp-3);
	margin-bottom: var(--sp-2);
}

.timeline__period {
	font-size: var(--fs-xs);
	color: var(--text-faint);
	letter-spacing: 0.02em;
}

.timeline__chip {
	padding: 0.1rem 0.5rem;
	border-radius: var(--radius-pill);
	background: var(--brand-soft);
	color: var(--brand);
	font-size: 0.68rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.timeline__role {
	font-size: var(--fs-lg);
	line-height: 1.3;
	margin-bottom: var(--sp-1);
}

.timeline__company {
	font-size: var(--fs-sm);
	font-weight: 600;
	color: var(--brand);
	margin-bottom: var(--sp-3);
}

.timeline__sep {
	color: var(--text-faint);
	margin-inline: 0.3rem;
}

.timeline__location {
	font-weight: 400;
	color: var(--text-faint);
}

.timeline__description {
	font-size: var(--fs-sm);
	color: var(--text-muted);
	margin-bottom: var(--sp-4);
}

.timeline__achievements {
	display: grid;
	gap: var(--sp-2);
}

.timeline__achievements li {
	display: flex;
	gap: var(--sp-3);
	font-size: var(--fs-sm);
	color: var(--text-muted);
	line-height: 1.5;
}

.timeline__achievements svg {
	flex-shrink: 0;
	margin-top: 4px;
	color: var(--brand);
}

.education {
	display: grid;
	gap: var(--sp-3);
}

.education__item {
	padding: var(--sp-4) var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	border-left: 3px solid var(--border-strong);
	transition: border-left-color 0.25s var(--ease);
}

.education__item:first-child {
	border-left-color: var(--brand);
}

.education__item:hover {
	border-left-color: var(--brand);
}

.education__period {
	font-size: var(--fs-xs);
	color: var(--text-faint);
}

.education__degree {
	font-size: var(--fs-base);
	margin-top: var(--sp-1);
}

.education__institution {
	font-size: var(--fs-sm);
	color: var(--text-muted);
}

.education__note {
	margin-top: var(--sp-2);
	font-size: var(--fs-xs);
	font-style: italic;
	color: var(--text-faint);
}

@media (max-width: 900px) {
	.resume {
		grid-template-columns: 1fr;
		gap: var(--sp-7);
	}
}

@media (max-width: 520px) {
	.timeline {
		padding-left: var(--sp-6);
	}
	.timeline::before {
		left: 13px;
	}
	.timeline__marker {
		left: calc(var(--sp-6) * -1);
		width: 28px;
		height: 28px;
	}
	.timeline__card {
		padding: var(--sp-4);
	}
}
</style>
