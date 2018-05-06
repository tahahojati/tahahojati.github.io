<template>
<div>
	<project-modal ref="modal" :project="modalProject"> </project-modal>
	<div class="my-container container-fluid portfolio" style="opacity:1">	
		<div class="row">
			<article v-for="project of projects" class="col-12 col-sm-6 col-lg-4 col-xl-3">
				<div class=" card" @click="openModal(project)" :style="project.getCardStyle()">
					<div class="image">
						<img :src="project.cardImage">
						<span class="card-title"> {{project.cardTitle}}</span>
					</div>

					<div class="text">
						<template v-if="project.cardTextHtml != null" v-html="project.cardTextHtml"></template>
						<p v-else v-html="project.cardText"></p> 
						<!-- Above: still want to allow tags like <strong> <em> <br/> inside our card -->
					</div>				
				</div>
			</article>
		</div>
	</div>
</div>
</template>

<script>
import ProjectModal from './ProjectModal.vue';
import {projects} from '../data/Portfolio';

export default {
	data(){
		return {
			projects,
			modalProject: null,
		};
	},
	components: {
		ProjectModal,
	},
	methods: {
		openModal(project){
			this.modalProject = project; 
			this.$refs.modal.showModal();
		}
	}
};	
</script>

<style scoped>
	.card {
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
		margin: 20px;
		position: relative;
		margin-bottom: 50px;
		transition: all .2s ease-in-out;
	}

	.card:hover {
		/*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
		margin-bottom: 54px;
	}

	.card .image {
		position: relative;
		height: 200px;
		width: 100%;
		opacity: .7;
		overflow: hidden;
		transition: all .2s ease-in-out;
	}
	.card .image > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card .image:hover,
	.card:hover .image {
		opacity: 1;
	}
	.card .image .card-title {
		text-shadow: -1px 0 5px grey, 0 1px 5px grey, 1px 0 5px grey, 0 -1px 5px grey;
		position: absolute;
		left:0;
		bottom: 0;
		color: #fff;
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    max-width: 100%;
	    padding: 24px;
	}
	.card .card-title {
		    font-size: 24px;
    font-weight: 300;
	}

	.text {
		background: #FFF;
		padding: 20px;
		height: 100px;
	}

	.text p {
		margin-bottom: 0px;
	}
</style>