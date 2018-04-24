<template>
	<div class="row">
		<div class="col-xs-12">
			<img class="img-responsive" :src="src"/>
		</div>
		<div class="col-xs-12" v-html="slide.textHtml">

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