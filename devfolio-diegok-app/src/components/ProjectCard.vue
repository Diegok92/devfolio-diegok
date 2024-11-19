<template>
	<div class="card shadow-sm project-card">
		<img :src="project.image" class="card-img-top" alt="Project Image" />
		<div class="card-body">
			<h5 class="card-title">{{ project.name }}</h5>
			<p class="card-text">{{ project.description }}</p>

			<div class="buttons-container">
				<a :href="project.url" target="_blank" class="btn btn-primary">
					<i class="fas fa-external-link-alt"></i> View GitHub Repository
				</a>
				<a
					v-if="project.pagesUrl"
					:href="project.pagesUrl"
					target="_blank"
					class="btn btn-secondary mt-2"
				>
					<i class="fas fa-globe"></i> View Live Demo
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
	width: calc(33.33% - 30px); /* Tarjetas uniformes en 3 columnas */
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	padding: 20px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0; /* Se elimina el margen */
}

@media (max-width: 992px) {
	.project-card {
		width: calc(50% - 30px); /* 2 columnas en pantallas medianas */
	}
}

@media (max-width: 600px) {
	.project-card {
		width: calc(100% - 30px); /* 1 columna en pantallas pequeñas */
	}
}

.project-card:hover {
	transform: translateY(-10px);
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.card-img-top {
	height: 200px;
	object-fit: cover;
	transition: transform 0.3s ease;
	border-radius: 5px;
	width: 100%;
}

.project-card:hover .card-img-top {
	transform: scale(1.05);
}

.card-body {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	flex-grow: 1; /* Para que las tarjetas crezcan uniformemente */
}

.buttons-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: auto; /* Para empujar los botones al final */
}

.btn {
	width: 80%;
	margin-bottom: 10px;
	font-weight: bold;
	transition: all 0.3s ease;
}

.btn-primary {
	background-color: #007bff;
	color: #ffffff;
}

.btn-primary:hover {
	background-color: #0056b3;
	color: #ffffff;
	transform: translateY(-3px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
	background-color: #6c757d;
	color: #ffffff;
}

.btn-secondary:hover {
	background-color: #5a6268;
	color: #ffffff;
	transform: translateY(-3px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
