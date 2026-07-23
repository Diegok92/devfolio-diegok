const OPTIONS = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };

let observer = null;

function getObserver() {
	if (observer) return observer;
	observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			entry.target.classList.add("is-visible");

			observer.unobserve(entry.target);
		}
	}, OPTIONS);
	return observer;
}

export const reveal = {
	mounted(el, binding) {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("reveal", "is-visible");
			return;
		}
		el.classList.add("reveal");
		if (binding.value) {
			el.style.setProperty("--reveal-delay", `${binding.value}ms`);
		}
		getObserver().observe(el);
	},
	unmounted(el) {
		observer?.unobserve(el);
	},
};
