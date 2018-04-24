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
// import ModalViewImgSide from './ModalViewImgSide.vue';
// import ModalViewImgWhole from './ModalViewImgWhole.vue';
import TinySlider from 'vue-tiny-slider';

const farmsafe = {
		title: 'Farm Akamai',
		subtitle: '(Second place winner of Hawaii Agricultural Hackathon (Agathon, Feb 2018))',
		img: 'img/farmsafe_proto1.png',
		bigimg: 'img/farmsafe_big.jpg', 
		github: 'https://github.com/tahahojati/FarmSafe_Agathon_2018_2',
		frameworks:['android'],
		description: "This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.",
		slides:[
			{
				textHtml: "<h2>Introduction and Design</h2> <p>This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.</p>" 
				+ "<p>The app is meant to address an essential issue in the Hawaii Farms.  Every year, a population of farmers and laborers immigrate to Hawaii.  These individuals frequently do not speak English and are not familiar to the American standards of farming.  Currently, there is no affordable way to educate these farmers.  Moreover, department of Agriculture does not have a dependable way to assure that a new farmer is familiar with regulations.  This can lead to food safety issues due to inadequate adherence to safety standards among other issues. </p>"
				+"<p>We chose to develop an application that can teach farmers about Agricultural methods and standards in a variety of languages. We chose the mobile platform over web/desktop as we understood that the app must be available to farmers in the field without any network connection.  Moreover, we wanted a simple design that is mostly self explanatory.  The pictures below show our prototype created using proto.io</p>",
				objectHtml: '<img src="../assets/farmsafe_proto1.png" class="img-responsive"/> ',
				objectAddress: 'farmsafe_proto1.png', 
				layoutComponent: 'ModalViewImgTop',
			},
		]		
		
	};

export default {
	data(){
		return {
			//FIXME: set this to false.
			showModal: true,
		};
	},
	components: {
		ModalViewImgTop,
		// ModalViewImgSide,
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