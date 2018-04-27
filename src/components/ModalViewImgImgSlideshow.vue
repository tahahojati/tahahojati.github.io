<template>
	<tiny-slider  :mouse-drag="true" :loop="true" :speed="400" :controls="false" :autoplay="true" 
	 :autoplayHoverPause="true" :autoplayTimeout="autoPlayTimeout"
	 mode="gallery"
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
			imagePaths: [],
		};
	},
	components: {
		TinySlider,
	},
	props: {
		data: {
			type: Array,
		},
		autoPlayTimeout:{
			type: Number,
			default: 4500,
		}
	},
	created(){
		this.imagePaths = this.data;
	},
	methods:{

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
