<script setup>
import { useI18n } from "vue-i18n";
import AppIcon from "../components/AppIcon.vue";
import { social } from "../data/resume.js";
import profilePicture from "../assets/profile-picture.jpg";

const { t } = useI18n();

const stats = [
	{ value: "5", key: "stat1" },
	{ value: "12", key: "stat3" },
	{ value: "+9", key: "stat2" },
	{ value: "3", key: "stat4" },
];

const links = [
	{ icon: "linkedin", href: social.linkedin, label: "LinkedIn" },
	{ icon: "mail", href: `mailto:${social.email}`, label: "Email" },
	{ icon: "whatsapp", href: social.whatsapp, label: "WhatsApp" },
];
</script>

<template>
	<section id="top" class="hero">
		<div class="hero__glow" aria-hidden="true"></div>
		<div class="hero__grid-lines" aria-hidden="true"></div>

		<div class="container hero__inner">
			<div class="hero__content">
				<p class="hero__badge">
					<span class="hero__dot" aria-hidden="true"></span>
					{{ t("hero.available") }}
				</p>

				<p class="hero__greeting">{{ t("hero.greeting") }}</p>
				<h1 class="hero__name">{{ t("hero.name") }}</h1>
				<p class="hero__role">
					{{ t("hero.role") }}
					<span class="hero__sep" aria-hidden="true">·</span>
					<span class="hero__role2">{{ t("hero.role2") }}</span>
				</p>

				<p class="hero__tagline">{{ t("hero.tagline") }}</p>

				<div class="hero__actions">
					<a href="#projects" class="btn btn--primary">
						{{ t("hero.ctaProjects") }}
						<AppIcon name="arrowRight" :size="16" />
					</a>
					<a href="#contact" class="btn btn--ghost">
						{{ t("hero.ctaContact") }}
					</a>
					<ul class="hero__social">
						<li v-for="link in links" :key="link.label">
							<a
								:href="link.href"
								:aria-label="link.label"
								:title="link.label"
								target="_blank"
								rel="noopener noreferrer"
								class="hero__social-link"
							>
								<AppIcon :name="link.icon" :size="19" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="hero__aside">
				<div class="hero__portrait">
					<img
						:src="profilePicture"
						:alt="t('a11y.profileAlt')"
						width="280"
						height="280"
						fetchpriority="high"
					/>
					<span class="hero__portrait-ring" aria-hidden="true"></span>
				</div>
			</div>
		</div>

		<div class="container">
			<ul class="hero__stats">
				<li v-for="stat in stats" :key="stat.key" class="hero__stat">
					<span class="hero__stat-value">{{ stat.value }}</span>
					<span class="hero__stat-label">{{ t(`hero.${stat.key}`) }}</span>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.hero {
	position: relative;
	padding-top: calc(var(--nav-h) + var(--sp-8));
	padding-bottom: var(--sp-7);
	overflow: hidden;
	isolation: isolate;
}

.hero__glow {
	position: absolute;
	z-index: -2;
	top: -30%;
	right: -10%;
	width: min(760px, 90vw);
	aspect-ratio: 1;
	background: radial-gradient(
		circle at center,
		var(--brand-soft) 0%,
		transparent 62%
	);
	filter: blur(20px);
	pointer-events: none;
}

.hero__grid-lines {
	position: absolute;
	z-index: -1;
	inset: 0;
	background-image: linear-gradient(var(--border) 1px, transparent 1px),
		linear-gradient(90deg, var(--border) 1px, transparent 1px);
	background-size: 64px 64px;
	mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%);
	opacity: 0.5;
	pointer-events: none;
}

.hero__inner {
	display: grid;
	grid-template-columns: minmax(0, 1fr) auto;
	align-items: center;
	gap: var(--sp-8);
}

.hero__badge {
	display: inline-flex;
	align-items: center;
	gap: var(--sp-2);
	padding: 0.32rem 0.85rem 0.32rem 0.6rem;
	margin-bottom: var(--sp-5);
	border-radius: var(--radius-pill);
	border: 1px solid color-mix(in srgb, var(--brand) 35%, transparent);
	background: var(--brand-soft);
	color: var(--brand);
	font-size: var(--fs-xs);
	font-weight: 600;
	letter-spacing: 0.01em;
}

.hero__dot {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: var(--brand);
	box-shadow: 0 0 0 0 var(--brand);
	animation: pulse 2.4s infinite;
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 color-mix(in srgb, var(--brand) 60%, transparent);
	}
	70% {
		box-shadow: 0 0 0 8px transparent;
	}
	100% {
		box-shadow: 0 0 0 0 transparent;
	}
}

.hero__greeting {
	font-family: var(--font-mono);
	font-size: var(--fs-md);
	color: var(--text-muted);
	margin-bottom: var(--sp-1);
}

.hero__name {
	font-size: var(--fs-3xl);
	letter-spacing: -0.035em;
	margin-bottom: var(--sp-3);
	background: linear-gradient(
		135deg,
		var(--text) 30%,
		color-mix(in srgb, var(--brand) 75%, var(--text))
	);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}

.hero__role {
	font-size: var(--fs-xl);
	font-weight: 600;
	color: var(--text);
	margin-bottom: var(--sp-4);
	line-height: 1.3;
}

.hero__sep {
	color: var(--text-faint);
	margin-inline: 0.4rem;
}

.hero__role2 {
	color: var(--brand);
}

@media (max-width: 560px) {
	.hero__sep {
		display: none;
	}
	.hero__role2 {
		display: block;
	}
}

.hero__tagline {
	max-width: 52ch;
	font-size: var(--fs-lg);
	color: var(--text-muted);
	margin-bottom: var(--sp-6);
}

.hero__actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: var(--sp-3);
}

.hero__social {
	display: flex;
	gap: var(--sp-2);
	margin-left: var(--sp-2);
}

.hero__social-link {
	display: grid;
	place-items: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid var(--border);
	color: var(--text-muted);
	transition: color 0.2s var(--ease), border-color 0.2s var(--ease), transform
		0.2s var(--ease);
}

.hero__social-link:hover {
	color: var(--brand);
	border-color: var(--brand);
	transform: translateY(-3px);
}

.hero__portrait {
	position: relative;
	width: clamp(200px, 24vw, 280px);
	aspect-ratio: 1;
}

.hero__portrait img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-strong);
	box-shadow: var(--shadow-lg);
}

.hero__portrait-ring {
	position: absolute;
	inset: -14px;
	z-index: -1;
	border-radius: calc(var(--radius-lg) + 14px);
	border: 1px dashed color-mix(in srgb, var(--brand) 40%, transparent);
}

.hero__stats {
	display: flex;
	flex-wrap: wrap;
	gap: var(--sp-6) var(--sp-8);
	margin-top: var(--sp-8);
	padding-top: var(--sp-6);
	border-top: 1px solid var(--border);
}

.hero__stat {
	display: flex;
	flex-direction: column;
}

.hero__stat-value {
	font-family: var(--font-mono);
	font-size: var(--fs-2xl);
	font-weight: 700;
	line-height: 1.1;
	color: var(--brand);
}

.hero__stat-label {
	font-size: var(--fs-sm);
	color: var(--text-faint);
}

@media (max-width: 860px) {
	.hero__inner {
		grid-template-columns: 1fr;
		gap: var(--sp-6);
	}

	.hero__aside {
		order: -1;
	}

	.hero__portrait {
		width: 132px;
	}

	.hero__stats {
		gap: var(--sp-5);
		justify-content: space-between;
	}
}

@media (max-width: 480px) {
	.hero__social {
		margin-left: 0;
		width: 100%;
	}

	.hero__actions .btn {
		flex: 1 1 auto;
	}
}
</style>
