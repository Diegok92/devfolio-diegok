<template>
	<div id="app">
		<Navbar />
		<Home />
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
};
</script>

<style>
body {
	font-family: Arial, sans-serif;
	background-color: #ffffff;
}
</style>
