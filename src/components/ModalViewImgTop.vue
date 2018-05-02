<template>
	<div>
		<div class="col-xs-12" style="border-bottom: dotted 1px black; padding-bottom:5px">
			<img v-if="data.mode === 'img'" class="img-responsive top-modal-slide-img" :src="data.imgSrc" :style="data.getObjectStyle()"/>
			<component v-else :is="data.objectComponent" :style="data.getObjecStyle()"></component>
		</div>
		<div class="container-fluid" :style="data.getContentStyle()">
			<div class="row">
				<div class="col-12" v-if="data.contentHtml" v-html="data.contentHtml" ></div>
				<div class="col-12" v-else><p v-html="data.ContentText"></p></div>
			</div>
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