<template>
	<div id="app">
		<Navbar @language-changed="handleLanguageChange" />
		<Home :currentLocale="currentLocale" />
		<Footer />
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Navbar,
		Home,
		Footer,
	},
	data() {
		return {
			currentLocale: this.$i18n.locale,
		};
	},
	methods: {
		handleLanguageChange(newLocale) {
			this.currentLocale = newLocale;
		},
	},
};
</script>

<style>
body {
	font-family: Arial, sans-serif;
	background-color: #ffffff;
}
</style>
