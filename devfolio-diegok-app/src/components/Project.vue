<template>
	<div id="project">
		<h2 class="text-center mb-4">Project: SegurosMatde</h2>
		<div class="row justify-content-center">
			<div class="col-md-6 mb-4">
				<div class="card h-100">
					<div class="card-body">
						<h5 class="card-title">{{ project.name }}</h5>
						<p class="card-text">{{ project.description }}</p>
						<a :href="project.html_url" target="_blank" class="btn btn-primary"
							>View on GitHub</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Project",
	data() {
		return {
			project: {
				name: "SegurosMatde",
				description:
					"A sample insurance management application made for practice.",
				html_url: "https://github.com/Diegok92/SegurosMatde",
			},
		};
	},
};
</script>
