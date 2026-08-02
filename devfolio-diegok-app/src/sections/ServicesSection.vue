<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { services } from "../data/resume.js";

const { t } = useI18n();
</script>

<template>
	<section id="services" class="section">
		<div class="container">
			<SectionHeading
				:eyebrow="t('services.eyebrow')"
				:title="t('services.title')"
				:subtitle="t('services.subtitle')"
				align="center"
				wide
			/>

			<ul class="services">
				<li
					v-for="(service, i) in services"
					:key="service.id"
					class="services__card"
					v-reveal="i * 70"
				>
					<span class="services__icon">
						<AppIcon :name="service.icon" :size="22" />
					</span>
					<h3>{{ t(`services.${service.id}.title`) }}</h3>
					<p>{{ t(`services.${service.id}.description`) }}</p>
				</li>
			</ul>

			<div class="services__cta" v-reveal>
				<a href="#contact" class="btn btn--primary">
					{{ t("services.cta") }}
					<AppIcon name="arrowRight" :size="16" />
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
.services {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: var(--sp-4);
}

.services__card {
	position: relative;
	padding: var(--sp-6) var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	overflow: hidden;
	transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}

.services__card::before {
	content: "";
	position: absolute;
	inset: 0 0 auto 0;
	height: 2px;
	background: linear-gradient(90deg, transparent, var(--brand), transparent);
	opacity: 0;
	transition: opacity 0.3s var(--ease);
}

.services__card:hover {
	border-color: var(--border-strong);
	transform: translateY(-5px);
}

.services__card:hover::before {
	opacity: 1;
}

.services__icon {
	display: grid;
	place-items: center;
	width: 46px;
	height: 46px;
	margin-bottom: var(--sp-4);
	border-radius: var(--radius-sm);
	background: var(--brand-soft);
	color: var(--brand);
}

.services__card h3 {
	font-size: var(--fs-lg);
	margin-bottom: var(--sp-2);
}

.services__card p {
	font-size: var(--fs-sm);
	color: var(--text-muted);
}

.services__cta {
	display: flex;
	justify-content: center;
	margin-top: var(--sp-7);
}
</style>
