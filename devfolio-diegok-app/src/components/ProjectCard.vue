<template>
	<div class="card shadow-sm project-card">
		<div class="card-img-container">
			<img :src="project.image" class="card-img-top" alt="Project Image" />
		</div>
		<div class="card-body">
			<h5 class="card-title">{{ project.name }}</h5>
			<p class="card-text">{{ project.description }}</p>

			<div class="buttons-container">
				<a
					v-if="project.pagesUrl"
					:href="project.pagesUrl"
					target="_blank"
					class="btn btn-live-demo"
				>
					<i class="fas fa-globe"></i> View Live Demo
				</a>
				<a :href="project.url" target="_blank" class="btn btn-repository">
					<i class="fab fa-github"></i> GitHub Repository
				</a>
			</div>
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
	width: calc(33.33% - 20px);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	padding: 15px;
	background-color: #ffffff;
	border-radius: 12px;
	box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 15px;
}

@media (max-width: 992px) {
	.project-card {
		width: calc(50% - 20px);
	}
}

@media (max-width: 600px) {
	.project-card {
		width: calc(100% - 20px);
	}
}

.project-card:hover {
	transform: translateY(-10px);
	box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-img-container {
	width: 100%;
	height: 180px;
	overflow: hidden;
	border-radius: 8px;
	position: relative;
}

.card-img-top {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.project-card:hover .card-img-top {
	transform: scale(1.1);
}

.card-body {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
}

.buttons-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: auto;
}

.btn {
	width: 100%;
	margin-bottom: 10px;
	font-weight: bold;
	transition: all 0.3s ease;
}

.btn-live-demo {
	background-color: #28a745;
	color: #ffffff;
}

.btn-live-demo:hover {
	background-color: #218838;
	transform: translateY(-3px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	color: white;
}

.btn-repository {
	background-color: #343a40;
	color: #ffffff;
}

.btn-repository:hover {
	background-color: #23272b;
	transform: translateY(-3px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	color: white;
}
</style>
