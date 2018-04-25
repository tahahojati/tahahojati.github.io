<template>
	<modal v-model="showModal">
		<template slot="body">
			<tiny-slider  :mouse-drag="true" :loop="false"
			 items="1" :gutter="20" :edgePadding="50" controlsContainer="#slider-controls"
			 :nav="true">
			 	<div v-for="slide in project.slides">
			 		<component :is="slide.layoutComponent" :slide="slide"/>
			 	</div>
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
// import ModalViewImgWhole from './ModalViewImgWhole.vue';
import TinySlider from 'vue-tiny-slider';
import {farmsafe} from '../data/Portfolio'


export default {
	data(){
		return {
			//FIXME: set this to false.
			showModal: true,
		};
	},
	components: {
		ModalViewImgTop,
		ModalViewImgLeft,
		// ModalViewImgWhole,
		Modal,
		TinySlider,
	},
	props: {
		project: {
			type: Object,
			default: () => farmsafe,
		}
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
#slider-controls li {
	display: block;
    position: absolute;
    list-style: none;
    top: 50%;
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    margin:0;
    margin-top: -30px;
}
.modal-container{
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
.tns-outer.tns-ovh{
	text-align: center;
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