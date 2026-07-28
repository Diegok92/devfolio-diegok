<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
	project: { type: Object, required: true },
});

const { t, te } = useI18n();

const base = computed(() => `projects.${props.project.id}`);
const hasClient = computed(() => te(`${base.value}.client`));

const monogram = computed(() =>
	t(`${base.value}.title`)
		.replace(/[^\p{L}\p{N} ]/gu, " ")
		.trim()
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w[0])
		.join("")
		.toUpperCase()
);
</script>

<template>
	<article class="card" v-reveal>
		<div class="card__media" :class="`card__media--${project.accent}`">
			<img
				v-if="project.image"
				:src="project.image"
				:alt="`${t(base + '.title')} — ${t('a11y.projectAlt')}`"
				loading="lazy"
				decoding="async"
			/>

			<div v-else class="card__placeholder">
				<span class="card__monogram">{{ monogram }}</span>
				<span class="card__placeholder-note">{{ t("projects.noPreview") }}</span>
			</div>

		</div>

		<div class="card__body">
			<div v-if="hasClient" class="card__meta">
				<span class="card__client">{{ t(`${base}.client`) }}</span>
			</div>

			<h3 class="card__title">{{ t(`${base}.title`) }}</h3>
			<p class="card__description">{{ t(`${base}.description`) }}</p>

			<ul class="card__stack">
				<li v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</li>
			</ul>

			<div class="card__actions">
				<a
					v-if="project.demo"
					:href="project.demo"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn--primary btn--sm"
				>
					<AppIcon name="external" :size="15" />
					{{ t("projects.viewDemo") }}
				</a>

				<span v-else-if="project.status" class="card__pending">
					<span class="card__pending-dot" aria-hidden="true"></span>
					{{ t(`projects.${project.status}`) }}
				</span>

				<a
					v-if="project.repo"
					:href="project.repo"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn--ghost btn--sm"
				>
					<AppIcon name="github" :size="15" />
					{{ t("projects.viewRepo") }}
				</a>
			</div>
		</div>
	</article>
</template>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	height: 100%;
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	overflow: hidden;
	transition: transform 0.3s var(--ease), border-color 0.3s var(--ease),
		box-shadow 0.3s var(--ease);
}

.card:hover {
	transform: translateY(-5px);
	border-color: var(--border-strong);
	box-shadow: var(--shadow);
}

.card__media {
	position: relative;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	background: var(--surface-2);
	border-bottom: 1px solid var(--border);
}

.card__media img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top center;
	transition: transform 0.5s var(--ease);
}

.card:hover .card__media img {
	transform: scale(1.04);
}

.card__placeholder {
	display: grid;
	place-content: center;
	justify-items: center;
	gap: var(--sp-2);
	height: 100%;
	background: linear-gradient(
		135deg,
		color-mix(in srgb, var(--brand) 14%, var(--surface-2)),
		var(--surface-2) 70%
	);
}

.card__media--accent .card__placeholder {
	background: linear-gradient(
		135deg,
		color-mix(in srgb, var(--accent) 16%, var(--surface-2)),
		var(--surface-2) 70%
	);
}

.card__monogram {
	font-family: var(--font-mono);
	font-size: clamp(1.8rem, 4vw, 2.5rem);
	font-weight: 700;
	letter-spacing: 0.06em;
	color: var(--brand);
	opacity: 0.85;
}

.card__media--accent .card__monogram {
	color: var(--accent);
}

.card__placeholder-note {
	font-size: var(--fs-xs);
	color: var(--text-faint);
}

.card__badge {
	position: absolute;
	top: var(--sp-3);
	left: var(--sp-3);
	padding: 0.2rem 0.65rem;
	border-radius: var(--radius-pill);
	background: var(--brand);
	color: var(--on-brand);
	font-size: var(--fs-xs);
	font-weight: 700;
	letter-spacing: 0.03em;
	text-transform: uppercase;
}

.card__body {
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: var(--sp-5);
	gap: var(--sp-3);
}

.card__meta {
	display: flex;
	justify-content: flex-end;
	align-items: baseline;
	gap: var(--sp-3);
	font-size: var(--fs-xs);
	color: var(--text-faint);
}

.card__client {
	color: var(--brand);
	font-weight: 600;
	margin-right: auto;
}

.card__title {
	font-size: var(--fs-lg);
	line-height: 1.25;
}

.card__description {
	font-size: var(--fs-sm);
	color: var(--text-muted);
}

.card__stack {
	display: flex;
	flex-wrap: wrap;
	gap: var(--sp-2);
	margin-top: auto;
	padding-top: var(--sp-2);
}

.card__actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--sp-3);
	padding-top: var(--sp-2);
}

.card__pending {
	display: inline-flex;
	align-items: center;
	gap: var(--sp-2);
	font-size: var(--fs-xs);
	color: var(--text-faint);
	font-style: italic;
}

.card__pending-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--text-faint);
}
</style>
