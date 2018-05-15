<template>
	<modal ref="modal"  @changeVisibility="$emit('changeVisibility', false)">
		<template slot="body">
			<!-- :edgePadding="50" this was removed from below..-->
			<carousel ref="sliderComponent"  :mouse-drag="true" :loop="false"
			 :perPage="1"
			 items="1" controlsContainer="#slider-controls"
			 font-size="20px"
			 paginationColor="#a2a2a2"
			 :nav="true">
			 	<template v-if="project !== null">
				 	<slide  v-for="slide in project.slides">
				 		<component :is="slide.layoutComponent" :slide="slide"/>
				 	</slide>
			 	</template>
			</carousel>
		</template>
		<template slot="container">
			<ul id="slider-controls">
				<li class="prev tiny-slider-nav-arrow" @click="advanceCarousel('backward')" data-controls="prev">
					<img src="../assets/angle-left.png" alt=""/>
				</li>
				<li class="next tiny-slider-nav-arrow" @click="advanceCarousel('forward')" data-controls="next">
					<img src="../assets/angle-right.png" alt=""/>
				</li>
			</ul>
		</template>
		
	</modal>
</template>
<script>
import Modal from './Modal.vue';
import ModalViewImgTop from './ModalViewImgTop.vue';
import ModalViewImgLeft from './ModalViewImgLeft.vue';
import ModalViewImgOnly from './ModalViewImgOnly.vue';
// import ModalViewImgWhole from './ModalViewImgWhole.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
	data(){
		return {
		}; 
	},
	components: {
		ModalViewImgTop,
		ModalViewImgLeft,
		ModalViewImgOnly,
		// ModalViewImgWhole,
		Modal,
		Carousel,
    	Slide
	},
	props: {
		project: {
			type: Object,
		},
	},
	watch:{
		pproject(newval,oldval){
			console.log(oldval, newval, this);
			window.ss = this; 
			const thisComponent = this ;
			const sliderComponent = this.$refs.sliderComponent; 
			if(oldval === null && newval !== null ){
				debugger;
				modalComponent.$children[0].init();
				this.tinySlider = modalComponent.$children[0].slider; 
				tinySlider.events.on("indexChanged", function (data){
						console.log(data);
					}
				);
			}
		}
	},
	methods:{
		advanceCarousel(direction){
			this.$refs.sliderComponent.advancePage(direction);
		},
		showModal(){
			console.log('inside showModal');
			this.$refs.modal.show();
		},
		hideModal(){
			//TODO: not implemented
		},
	},
	mounted(){
		console.log("modal mounted");
	}
};
</script>
<style src="tiny-slider/dist/tiny-slider.css" >
</style>
<style src="../styles/tiny-slider-extra.css" >
</style>
<style>
#slider-controls li {
	display: block;
    position: absolute;
    list-style: none;
    top: 50%;
    background: #cccacac7;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    margin:0;
    margin-top: -30px;
}
.my-modal-container{
	position:relative;
}
#slider-controls li:hover {
    background: #cccaca;
}
.tiny-slider-nav-arrow{
	width:45px;
}
#slider-controls .tiny-slider-nav-arrow.prev {
    left: 0;
}
#slider-controls .tiny-slider-nav-arrow.next {
    right: 0;
} 	
#slider-controls{
	vertical-align: middle;
	padding:0;
	/*margin: 0 -25px 0 -25px ;*/
	position: static;
	top:0;
	bottom: 0;
	/*width: 100%;*/
	left: 0;
	right:0;
}
</style>
<style>
.tns-slide-active{
	height:100%;
}
.tns-outer.tns-ovh{
	text-align: center;
}
.tns-item p {
	font-size:initial;
}
.tns-outer.tns-ovh.tnsnav{
	display: inline-block;
	margin-left: auto;
	margin-right: auto;
}
</style>
<!-- <style lang="scss">
@import 'tiny-slider/src/tiny-slider';
</style>  -->