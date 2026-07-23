import { createI18n } from "vue-i18n";
import es from "./es.js";
import en from "./en.js";

const SUPPORTED = ["es", "en"];
const STORAGE_KEY = "devfolio-locale";

function resolveLocale() {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved && SUPPORTED.includes(saved)) return saved;

	const browser = (navigator.language || "es").slice(0, 2).toLowerCase();
	return SUPPORTED.includes(browser) ? browser : "es";
}

export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: resolveLocale(),
	fallbackLocale: "es",
	messages: { es, en },
});

export function setLocale(locale) {
	if (!SUPPORTED.includes(locale)) return;
	i18n.global.locale.value = locale;
	localStorage.setItem(STORAGE_KEY, locale);
	applyDocumentLocale(locale);
}

export function applyDocumentLocale(locale = i18n.global.locale.value) {
	const t = i18n.global.t;
	document.documentElement.lang = locale;
	document.title = t("meta.title");
	document
		.querySelector('meta[name="description"]')
		?.setAttribute("content", t("meta.description"));
	document
		.querySelector('meta[property="og:title"]')
		?.setAttribute("content", t("meta.title"));
	document
		.querySelector('meta[property="og:description"]')
		?.setAttribute("content", t("meta.description"));
	document
		.querySelector('meta[property="og:locale"]')
		?.setAttribute("content", locale === "es" ? "es_AR" : "en_US");
}

export { SUPPORTED as SUPPORTED_LOCALES };
