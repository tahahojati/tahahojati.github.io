<template>
	<tiny-slider  :mouse-drag="true" :loop="true" :speed="400" :controls="false" :autoplay="true" 
	 :autoplayHoverPause="true" :autoplayTimeout="autoPlayTimeout"
	 @getInfo="info($event)"
	 mode="gallery"
	 nested="inner"
	 :autoInit="false"
	 :autoplayButtonOutput="false"
	 items="1" :gutter="0" 
	 :nav="false">
	 	<div v-for="path in imagePaths">
	 		<img :src="path"/>
	 	</div>
	</tiny-slider>
</template>
<script>
import TinySlider from 'vue-tiny-slider';


export default {
	data(){
		return {
			
		};
	},
	components: {
		TinySlider,
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
		setTimeout(()=>this.$children[0].init(), 200);
		console.log("rebuilt");
		window.comp = this; 
	}
};
</script>
<style src="tiny-slider/dist/tiny-slider.css" >
</style>
<style src="../styles/tiny-slider-extra.css" >
</style>
<style>
tiny-slider{
	margin: 0 30px;
}
</style>
