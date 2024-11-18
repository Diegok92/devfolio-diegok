<template>
	<footer class="footer bg-dark text-white py-4 text-center">
		<div class="container">
			<p>© 2024 Diego K Portfolio. All rights reserved.</p>
			<div class="social-links">
				<a
					href="https://github.com/Diegok92"
					target="_blank"
					class="text-white me-3"
				>
					<i class="fab fa-github"></i>
				</a>
				<a
					href="https://linkedin.com/in/diego-linkedin"
					target="_blank"
					class="text-white"
				>
					<i class="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
.footer {
	margin-top: 40px;
}

.social-links i {
	font-size: 1.5em;
}
</style>
