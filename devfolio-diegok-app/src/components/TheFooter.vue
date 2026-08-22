<script setup>
import { useI18n } from "vue-i18n";
import AppIcon from "./AppIcon.vue";
import { social } from "../data/resume.js";

const { t } = useI18n();

const year = new Date().getFullYear();

const links = [
	{ icon: "github", href: social.github, label: "GitHub" },
	{ icon: "linkedin", href: social.linkedin, label: "LinkedIn" },
	{ icon: "whatsapp", href: social.whatsapp, label: "WhatsApp" },
	{ icon: "mail", href: `mailto:${social.email}`, label: "Email" },
];
</script>

<template>
	<footer class="footer">
		<div class="container footer__inner">
			<div class="footer__brand">
				<span class="footer__mark">DKD</span>
				<div>
					<p class="footer__name">Diego Kleiman</p>
					<p class="footer__wordmark">
						<span class="footer__accent">D</span><span class="footer__dim">iego</span><span class="footer__accent">K</span><span class="footer__dim">leiman</span><span class="footer__accent">D</span><span class="footer__dim">eveloper</span>
					</p>
				</div>
			</div>

			<ul class="footer__social">
				<li v-for="link in links" :key="link.label">
					<a
						:href="link.href"
						:aria-label="link.label"
						:title="link.label"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AppIcon :name="link.icon" :size="18" />
					</a>
				</li>
			</ul>
		</div>

		<div class="container footer__bottom">
			<p>© {{ year }} Diego Kleiman. {{ t("footer.rights") }}</p>
			<a href="#top" class="footer__top">
				{{ t("footer.backToTop") }}
				<AppIcon name="arrowDown" :size="14" class="footer__top-icon" />
			</a>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	padding-top: var(--sp-7);
	padding-bottom: var(--sp-5);
	border-top: 1px solid var(--border);
	background: var(--bg);
}

.footer__inner {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: var(--sp-5);
	padding-bottom: var(--sp-5);
}

.footer__brand {
	display: flex;
	align-items: center;
	gap: var(--sp-4);
}

.footer__mark {
	display: grid;
	place-items: center;
	width: 42px;
	height: 42px;
	border-radius: 12px;
	background: var(--brand);
	color: var(--on-brand);
	font-family: var(--font-mono);
	font-weight: 800;
	font-size: 0.85rem;
	letter-spacing: 0.01em;
}

.footer__name {
	font-weight: 600;
}

.footer__wordmark {
	font-family: var(--font-mono);
	font-size: var(--fs-xs);
	letter-spacing: -0.01em;
}

.footer__accent {
	color: var(--brand);
	font-weight: 700;
}

.footer__dim {
	color: var(--text-faint);
}

.footer__social {
	display: flex;
	gap: var(--sp-2);
}

.footer__social a {
	display: grid;
	place-items: center;
	width: 40px;
	height: 40px;
	border-radius: var(--radius-sm);
	border: 1px solid var(--border);
	color: var(--text-muted);
	transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.footer__social a:hover {
	color: var(--brand);
	border-color: var(--brand);
}

.footer__bottom {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: var(--sp-3);
	padding-top: var(--sp-5);
	border-top: 1px solid var(--border);
	font-size: var(--fs-xs);
	color: var(--text-faint);
}

.footer__top {
	display: inline-flex;
	align-items: center;
	gap: var(--sp-2);
	font-weight: 600;
	transition: color 0.2s var(--ease);
}

.footer__top:hover {
	color: var(--brand);
}

.footer__top-icon {
	transform: rotate(180deg);
}
</style>
