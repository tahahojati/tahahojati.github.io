<template>
	<div class="row">
		<div class="col-xs-5">
			<img class="img-responsive top-modal-slide-img" :src="src"/>
		</div>
		<div class="col-xs-7" v-html="slide.textHtml">

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
	created(){
		this.src = this.slide.objectAddress; 
	}
}
</script>
<style>
.top-modal-slide-img {
	max-height: 50vh;
}
</style>