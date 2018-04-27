<template>
<div class="my-container container-fluid portfolio" style="opacity:1">	
	<project-modal v-model="showModal" :project="modalProject"> </project-modal>
	<div class="row">
		<article v-for="project of projects" class="col-6 col-sm-4 col-lg-3">
			<div class=" card" @click="openModal(project)">
				<div class="image">
					<img src="http://materializecss.com/images/sample-1.jpg" width="100%">
					<span class="card-title"> {{project.title}}</span>
				</div>

				<div class="text">


					<p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.</p>

				</div>				
			</div>
		</article>
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
			showModal: false,
		};
	},
	components: {
		ProjectModal,
	},
	methods: {
		openModal(project){
			this.modalProject = project; 
			this.showModal = true;
		}
	}
};	
</script>

<style scoped>
	.card {
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
		opacity: .7;
		overflow: hidden;
		transition: all .2s ease-in-out;
	}

	.card .image:hover,
	.card:hover .image {
		height: 200px;
		opacity: 1;
	}
	.card .image .card-title {
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
		min-height: 200px;
	}

	.text p {
		margin-bottom: 0px;
	}
</style>