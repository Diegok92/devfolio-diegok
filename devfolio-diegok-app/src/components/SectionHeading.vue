<script setup>
defineProps({
	eyebrow: { type: String, default: "" },
	title: { type: String, required: true },
	subtitle: { type: String, default: "" },
	align: { type: String, default: "start" },
});
</script>

<template>
	<header class="heading" :class="`heading--${align}`" v-reveal>
		<p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
		<h2 class="heading__title">{{ title }}</h2>
		<p v-if="subtitle" class="heading__subtitle">{{ subtitle }}</p>
	</header>
</template>

<style scoped>
.heading {
	margin-bottom: var(--sp-7);
	max-width: 62ch;
}

.heading--center {
	margin-inline: auto;
	text-align: center;
}

.heading--center .eyebrow::before {
	display: none;
}

.heading__title {
	font-size: var(--fs-2xl);
}

.heading__subtitle {
	margin-top: var(--sp-3);
	font-size: var(--fs-lg);
	color: var(--text-muted);
}
</style>
