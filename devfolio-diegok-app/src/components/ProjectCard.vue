<template>
	<div class="card shadow-sm project-card">
		<img :src="project.image" class="card-img-top" alt="Project Image" />
		<div class="card-body">
			<h5 class="card-title">{{ project.name }}</h5>
			<p class="card-text">{{ project.description }}</p>
			<a :href="project.url" target="_blank" class="btn btn-primary">
				<i class="fas fa-external-link-alt"></i> View Project
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectCard",
	props: {
		project: Object,
	},
};
</script>

<style scoped>
.project-card {
	margin: 20px;
	transition: transform 0.3s ease;
}

.project-card:hover {
	transform: translateY(-5px);
}

.card-img-top {
	height: 200px;
	object-fit: cover;
}
</style>
