<template>
	<div class="container">
		<div class="row" style="height:100%">
			<div :class="imgCssClasses" style="border-right: 1px dotted">
				<img v-if="data.mode === 'img'" class="img-responsive" :src="data.imgSrc" />
				<component v-else :data="data.objectData" :is="data.objectComponent" class="img-responsive "></component>
			</div>
			<div :class="textCssClasses" v-html="data.contentHtml">

			</div>
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
		};
	},
	computed:{
		imgCssClasses(){
			if(this.slide.data.imgCssClasses)
				return this.slide.data.imgCssClasses;
			else
				return 'col-5';
		},
		textCssClasses(){
			if(this.slide.data.imgCssClasses)
				return this.slide.data.imgCssClasses;
			else
				return 'col-7';
		},
		data(){return this.slide.data;},
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