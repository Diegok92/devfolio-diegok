<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "vue-i18n";
import AppIcon from "./AppIcon.vue";
import { useTheme } from "../composables/useTheme.js";
import { setLocale, SUPPORTED_LOCALES } from "../i18n/index.js";

const { t, locale } = useI18n();
const { theme, toggle: toggleTheme } = useTheme();

const SECTIONS = [
	"about",
	"process",
	"experience",
	"projects",
	"services",
	"contact",
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const activeSection = ref("");

function onScroll() {
	isScrolled.value = window.scrollY > 24;

	const offset = 140;
	let current = "";
	for (const id of SECTIONS) {
		const el = document.getElementById(id);
		if (el && el.getBoundingClientRect().top <= offset) current = id;
	}
	activeSection.value = current;
}

function closeMenu() {
	isMenuOpen.value = false;
}

function onKeydown(e) {
	if (e.key === "Escape") closeMenu();
}

watch(isMenuOpen, (open) => {
	document.body.style.overflow = open ? "hidden" : "";
});

onMounted(() => {
	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("keydown", onKeydown);
	onScroll();
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", onScroll);
	window.removeEventListener("keydown", onKeydown);
	document.body.style.overflow = "";
});

function switchLocale(code) {
	setLocale(code);
	closeMenu();
}
</script>

<template>
	<header class="nav" :class="{ 'nav--solid': isScrolled || isMenuOpen }">
		<div class="nav__inner container">
			<a href="#top" class="nav__brand" @click="closeMenu">
				<span class="nav__brand-mark">DK</span>
				<span class="nav__brand-text">
					<strong>diegok</strong><span class="nav__brand-dim">developer</span>
				</span>
			</a>

			<nav
				class="nav__links"
				:class="{ 'is-open': isMenuOpen }"
				:aria-label="t('nav.menu')"
			>
				<ul class="nav__list">
					<li v-for="id in SECTIONS" :key="id">
						<a
							:href="`#${id}`"
							class="nav__link"
							:class="{ 'is-active': activeSection === id }"
							:aria-current="activeSection === id ? 'true' : undefined"
							@click="closeMenu"
						>
							{{ t(`nav.${id}`) }}
						</a>
					</li>
					</ul>
			</nav>

			<div class="nav__actions">
				<div class="lang" role="group" :aria-label="t('nav.language')">
					<button
						v-for="code in SUPPORTED_LOCALES"
						:key="code"
						class="lang__btn"
						:class="{ 'is-active': locale === code }"
						:aria-pressed="locale === code"
						@click="switchLocale(code)"
					>
						{{ code.toUpperCase() }}
					</button>
				</div>

				<button
					class="icon-btn"
					:aria-label="t('nav.theme')"
					:title="t('nav.theme')"
					@click="toggleTheme"
				>
					<AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="19" />
				</button>

				<button
					class="icon-btn nav__burger"
					:aria-label="t('nav.menu')"
					:aria-expanded="isMenuOpen"
					aria-controls="nav-links"
					@click="isMenuOpen = !isMenuOpen"
				>
					<AppIcon :name="isMenuOpen ? 'close' : 'menu'" :size="22" />
				</button>
			</div>
		</div>
	</header>
</template>

<style scoped>
.nav {
	position: fixed;
	inset: 0 0 auto 0;
	z-index: 1000;
	height: var(--nav-h);
	display: flex;
	align-items: center;
	border-bottom: 1px solid transparent;
	transition: background-color var(--dur) var(--ease), border-color var(--dur)
		var(--ease), backdrop-filter var(--dur) var(--ease);
}

.nav--solid {
	background: color-mix(in srgb, var(--bg) 82%, transparent);
	backdrop-filter: blur(14px) saturate(150%);
	border-bottom-color: var(--border);
}

.nav__inner {
	display: flex;
	align-items: center;
	gap: var(--sp-5);
	width: 100%;
}

.nav__brand {
	display: flex;
	align-items: center;
	gap: var(--sp-3);
	margin-right: auto;
	font-family: var(--font-mono);
	font-size: var(--fs-sm);
	letter-spacing: -0.01em;
}

.nav__brand-mark {
	display: grid;
	place-items: center;
	width: 34px;
	height: 34px;
	border-radius: 10px;
	background: var(--brand);
	color: var(--on-brand);
	font-weight: 800;
	font-size: 0.85rem;
	letter-spacing: 0.02em;
}

.nav__brand-dim {
	color: var(--text-faint);
}

.nav__list {
	display: flex;
	align-items: center;
	gap: var(--sp-1);
}

.nav__link {
	position: relative;
	display: block;
	padding: 0.5rem 0.8rem;
	border-radius: var(--radius-sm);
	font-size: var(--fs-sm);
	font-weight: 500;
	color: var(--text-muted);
	transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.nav__link:hover {
	color: var(--text);
	background: var(--surface-2);
}

.nav__link.is-active {
	color: var(--brand);
}

.nav__link.is-active::after {
	content: "";
	position: absolute;
	left: 0.8rem;
	right: 0.8rem;
	bottom: 0.15rem;
	height: 2px;
	border-radius: 2px;
	background: var(--brand);
}

.nav__actions {
	display: flex;
	align-items: center;
	gap: var(--sp-2);
}

.lang {
	display: flex;
	padding: 3px;
	border-radius: var(--radius-pill);
	background: var(--surface-2);
	border: 1px solid var(--border);
}

.lang__btn {
	padding: 0.22rem 0.55rem;
	border-radius: var(--radius-pill);
	font-family: var(--font-mono);
	font-size: 0.7rem;
	font-weight: 600;
	color: var(--text-faint);
	transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
}

.lang__btn.is-active {
	background: var(--brand);
	color: var(--on-brand);
}

.lang__btn:not(.is-active):hover {
	color: var(--text);
}

.icon-btn {
	display: grid;
	place-items: center;
	width: 38px;
	height: 38px;
	border-radius: var(--radius-sm);
	border: 1px solid var(--border);
	background: var(--surface-2);
	color: var(--text-muted);
	transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.icon-btn:hover {
	color: var(--brand);
	border-color: var(--brand);
}

.nav__burger {
	display: none;
}

@media (max-width: 1024px) {
	.nav__burger {
		display: grid;
	}

	.nav__links {
		position: fixed;
		inset: var(--nav-h) 0 0 0;
		background: var(--bg);
		padding: var(--sp-6) var(--sp-5) var(--sp-8);
		overflow-y: auto;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-8px);
		transition: opacity 0.25s var(--ease), transform 0.25s var(--ease),
			visibility 0.25s;
	}

	.nav__links.is-open {
		opacity: 1;
		visibility: visible;
		transform: none;
	}

	.nav__list {
		flex-direction: column;
		align-items: stretch;
		gap: var(--sp-1);
	}

	.nav__link {
		padding: var(--sp-4);
		font-size: var(--fs-lg);
		border-bottom: 1px solid var(--border);
		border-radius: 0;
	}

	.nav__link.is-active::after {
		display: none;
	}
}

@media (max-width: 420px) {
	.nav__brand-text {
		display: none;
	}
}
</style>
