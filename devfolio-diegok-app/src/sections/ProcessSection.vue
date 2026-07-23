<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";

const { t } = useI18n();

const steps = [
	{ id: "relevar", icon: "users" },
	{ id: "disenar", icon: "layers" },
	{ id: "implementar", icon: "terminal" },
	{ id: "acompanar", icon: "chart" },
];
</script>

<template>
	<section id="process" class="section">
		<div class="container">
			<SectionHeading
				:eyebrow="t('process.eyebrow')"
				:title="t('process.title')"
				:subtitle="t('process.subtitle')"
			/>

			<ol class="process">
				<li
					v-for="(step, i) in steps"
					:key="step.id"
					class="process__step"
					v-reveal="i * 80"
				>
					<div class="process__head">
						<span class="process__num mono">{{
							String(i + 1).padStart(2, "0")
						}}</span>
						<span class="process__icon"><AppIcon :name="step.icon" :size="18" /></span>
					</div>
					<h3>{{ t(`process.${step.id}.title`) }}</h3>
					<p>{{ t(`process.${step.id}.description`) }}</p>
				</li>
			</ol>
		</div>
	</section>
</template>

<style scoped>
.process {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: var(--sp-5);
	counter-reset: step;
}

.process__step {
	position: relative;
	padding-top: var(--sp-5);
	border-top: 2px solid var(--border);
	transition: border-color 0.3s var(--ease);
}

.process__step:hover {
	border-top-color: var(--brand);
}

.process__step:not(:last-child)::after {
	content: "";
	position: absolute;
	top: -6px;
	right: calc(var(--sp-5) / -2 - 5px);
	width: 10px;
	height: 10px;
	border-top: 2px solid var(--border);
	border-right: 2px solid var(--border);
	transform: rotate(45deg);
}

.process__head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--sp-3);
	margin-bottom: var(--sp-4);
}

.process__num {
	font-size: var(--fs-2xl);
	font-weight: 700;
	line-height: 1;
	color: var(--border-strong);
}

.process__icon {
	display: grid;
	place-items: center;
	width: 40px;
	height: 40px;
	border-radius: var(--radius-sm);
	background: var(--brand-soft);
	color: var(--brand);
}

.process__step h3 {
	font-size: var(--fs-lg);
	margin-bottom: var(--sp-2);
}

.process__step p {
	font-size: var(--fs-sm);
	color: var(--text-muted);
}

@media (max-width: 700px) {
	.process__step::after {
		display: none;
	}
}
</style>
