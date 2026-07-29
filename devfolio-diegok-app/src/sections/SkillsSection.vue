<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { skillGroups } from "../data/resume.js";

const { t, tm, rt } = useI18n();

function itemsOf(id) {
	const list = tm(`skills.items.${id}`);
	return Array.isArray(list) ? list.map((item) => rt(item)) : [];
}
</script>

<template>
	<section id="skills" class="section section--alt">
		<div class="container">
			<SectionHeading
				:eyebrow="t('skills.eyebrow')"
				:title="t('skills.title')"
				:subtitle="t('skills.subtitle')"
			/>

			<ul class="skills">
				<li
					v-for="(group, i) in skillGroups"
					:key="group.id"
					class="skills__card"
					v-reveal="i * 50"
				>
					<div class="skills__head">
						<span class="skills__icon"><AppIcon :name="group.icon" :size="18" /></span>
						<h3>{{ t(`skills.${group.id}`) }}</h3>
					</div>
					<ul class="skills__items">
						<li v-for="item in itemsOf(group.id)" :key="item">{{ item }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.skills {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: var(--sp-4);
}

.skills__card {
	padding: var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	transition: border-color 0.25s var(--ease), transform 0.25s var(--ease);
}

.skills__card:hover {
	border-color: color-mix(in srgb, var(--brand) 45%, transparent);
	transform: translateY(-4px);
}

.skills__head {
	display: flex;
	align-items: center;
	gap: var(--sp-3);
	margin-bottom: var(--sp-4);
	padding-bottom: var(--sp-3);
	border-bottom: 1px solid var(--border);
}

.skills__head h3 {
	font-size: var(--fs-base);
}

.skills__icon {
	display: grid;
	place-items: center;
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	border-radius: var(--radius-sm);
	background: var(--brand-soft);
	color: var(--brand);
}

.skills__items {
	display: grid;
	gap: var(--sp-2);
}

.skills__items li {
	position: relative;
	padding-left: var(--sp-4);
	font-size: var(--fs-sm);
	color: var(--text-muted);
	line-height: 1.45;
}

.skills__items li::before {
	content: "";
	position: absolute;
	left: 0;
	top: 0.62em;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: var(--brand);
	opacity: 0.65;
}
</style>
