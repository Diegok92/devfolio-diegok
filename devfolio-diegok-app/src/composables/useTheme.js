import { ref, watch } from "vue";

const STORAGE_KEY = "devfolio-theme";

function initialTheme() {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === "light" || saved === "dark") return saved;

	return window.matchMedia("(prefers-color-scheme: light)").matches
		? "light"
		: "dark";
}

const theme = ref(initialTheme());

function apply(value) {
	document.documentElement.dataset.theme = value;

	document.documentElement.style.colorScheme = value;
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute("content", value === "light" ? "#ffffff" : "#0a0e14");
}

apply(theme.value);
watch(theme, (value) => {
	apply(value);
	localStorage.setItem(STORAGE_KEY, value);
});

export function useTheme() {
	const toggle = () => {
		theme.value = theme.value === "dark" ? "light" : "dark";
	};
	return { theme, toggle };
}
