<script setup>
import { useI18n } from "vue-i18n";
import SectionHeading from "../components/SectionHeading.vue";
import AppIcon from "../components/AppIcon.vue";
import { social } from "../data/resume.js";

const { t } = useI18n();

const channels = [
	{ id: "email", icon: "mail", href: `mailto:${social.email}`, value: social.email },
	{
		id: "linkedin",
		icon: "linkedin",
		href: social.linkedin,
		value: "/in/diego-kleiman92",
		external: true,
	},
	{
		id: "github",
		icon: "github",
		href: social.github,
		value: "@Diegok92",
		external: true,
	},
	{
		id: "whatsapp",
		icon: "whatsapp",
		href: social.whatsapp,
		value: "+54 9 11 3692 0026",
		external: true,
	},
];
</script>

<template>
	<section id="contact" class="section section--alt">
		<div class="container container--narrow">
			<SectionHeading
				:eyebrow="t('contact.eyebrow')"
				:title="t('contact.title')"
				:subtitle="t('contact.text')"
				align="center"
			/>

			<ul class="channels">
				<li
					v-for="(channel, i) in channels"
					:key="channel.id"
					v-reveal="i * 70"
				>
					<a
						:href="channel.href"
						:target="channel.external ? '_blank' : undefined"
						:rel="channel.external ? 'noopener noreferrer' : undefined"
						class="channels__card"
					>
						<span class="channels__icon">
							<AppIcon :name="channel.icon" :size="20" />
						</span>
						<span class="channels__text">
							<strong>{{ t(`contact.${channel.id}`) }}</strong>
							<span>{{ channel.value }}</span>
						</span>
						<AppIcon name="arrowRight" :size="16" class="channels__arrow" />
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.channels {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: var(--sp-3);
}

.channels__card {
	display: flex;
	align-items: center;
	gap: var(--sp-4);
	height: 100%;
	padding: var(--sp-4) var(--sp-5);
	border-radius: var(--radius);
	background: var(--surface);
	border: 1px solid var(--border);
	transition: border-color 0.25s var(--ease), transform 0.25s var(--ease);
}

.channels__card:hover {
	border-color: var(--brand);
	transform: translateY(-3px);
}

.channels__icon {
	display: grid;
	place-items: center;
	width: 42px;
	height: 42px;
	flex-shrink: 0;
	border-radius: var(--radius-sm);
	background: var(--brand-soft);
	color: var(--brand);
}

.channels__text {
	display: flex;
	flex-direction: column;
	min-width: 0;
}

.channels__text strong {
	font-size: var(--fs-sm);
}

.channels__text span {
	font-family: var(--font-mono);
	font-size: var(--fs-xs);
	color: var(--text-faint);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.channels__arrow {
	margin-left: auto;
	color: var(--text-faint);
	transition: transform 0.25s var(--ease), color 0.25s var(--ease);
}

.channels__card:hover .channels__arrow {
	color: var(--brand);
	transform: translateX(4px);
}

</style>
