<template>
	<modal ref="modal"  @changeVisibility="$emit('changeVisibility', false)">
		<template slot="body">
			<!-- :edgePadding="50" this was removed from below..-->
			<tiny-slider ref="sliderComponent"  :mouse-drag="true" :loop="false"
			:autoInit="false"
			 nested="outer"
			 items="1" controlsContainer="#slider-controls"
			 font-size="20px"
			 :nav="true">
			 	<template v-if="project !== null">
				 	<div  v-for="slide in project.slides">
				 		<component :is="slide.layoutComponent" :slide="slide"/>
				 	</div>
			 	</template>
			</tiny-slider>
		</template>
		<template slot="container">
			<ul id="slider-controls">
				<li class="prev tiny-slider-nav-arrow" data-controls="prev"><img src="../assets/angle-left.png" alt=""/></li>
				<li class="next tiny-slider-nav-arrow" data-controls="next"><img src="../assets/angle-right.png" alt=""/></li>
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
import TinySlider from 'vue-tiny-slider';

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
		TinySlider,
	},
	props: {
		project: {
			type: Object,
		},
	},
	watch:{
		project(newval,oldval){
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
    background: #f2f2f285;
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
    background: #f2f2f2;
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