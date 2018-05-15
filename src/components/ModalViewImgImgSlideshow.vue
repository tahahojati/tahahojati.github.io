<template>
	<carousel  ref="carousel"
		:perPage="1"
		:paginationEnabled="false"
		:speed="400"

		:loop="true"
		nested="inner">
		<slide v-for="path in imagePaths">
			<img class="center-horizontal" :src="path"/>
		</slide>
	</carousel>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';


export default {
	data(){
		return {
			carouselInterval: null,
			
		};
	},
	components: {
		Carousel,
		Slide,
	},
	props: {
		data: {
			type: Object,
		},
	},
	computed:{
		imagePaths(){
			return this.data.imagePaths; 
		},
		autoPlayTimeout(){
			return this.data.autoPlayTimeout || 4500; 
		}
	},
	methods:{
		info(e){
			console.log(e);
		},
		start(){
			this.$children[0].init(); 
		}

	},
	mounted(){
		this.carouselInterval = setInterval(
			() => this.$refs.carousel.advancePage(),
			3000
		);
	},
	beforeDestroy(){
		clearInterval(this.carouselInterval);
		console.log("destroyed");

	},
};
</script>
<style scoped>
	.center-horizontal{
		margin-right: auto;
		margin-left: auto;
		display: block;
	}
</style>
