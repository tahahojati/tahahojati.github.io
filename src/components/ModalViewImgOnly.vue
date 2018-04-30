<template>
	<div>
		<div class="col-xs-12" style="border-bottom: dotted 1px black; padding-bottom:5px">
			<img v-if="data.mode === 'img'" class="img-responsive top-modal-slide-img" :src="data.imgSrc" :style="data.hasOwnProperty('getObjectStyle')?data.getObjectStyle():null"/>
			<component v-else :is="data.objectComponent" :style="data.hasOwnProperty('getObjectStyle')?data.getObjectStyle():null"></component>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			src: '' ,
		}
	},
	props:{
		slide:{
			type: Object,
		}
	},
	computed: {
		data(){return this.slide.data;},
	},
	created(){
		this.src = this.slide.objectAddress; 
	}
}
</script>

<style scoped>
div{
	text-align:left;
}
.top-modal-slide-img {
	max-height: 50vh;
}
</style>