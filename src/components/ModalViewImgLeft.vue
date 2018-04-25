<template>
	<div class="row">
		<div class="col-5">
			<component :data="slide.objectData" :is="slide.objectComponent" class="img-responsive " />
		</div>
		<div class="col-7" v-html="slide.textHtml">

		</div>
	</div>
</template>

<script>
import ModalViewImgImgSlideshow from './ModalViewImgImgSlideshow.vue';

export default {
	components:{
		ModalViewImgImgSlideshow,
	},
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

</style>