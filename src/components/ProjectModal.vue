<template>
	<modal v-model="showModal">
		<template slot="body">
			<tiny-slider  :mouse-drag="true" :loop="false"
			 items="1" :gutter="20" :edgePadding="50" controlsContainer="#slider-controls"
			 :nav="true">
				<div>Slider item #1</div>
				<div>Slider item #2</div>
				<div>Slider item #3</div>
				<div>Slider item #4</div>
				<div>Slider item #5</div>
				<div>Slider item #6</div>
			</tiny-slider>
				<ul id="slider-controls">
					<li class="prev" data-controls="prev"><img src="../assets/angle-left.png" alt=""/></li>
					<li class="next" data-controls="next"><img src="../assets/angle-right.png" alt=""/></li>
				</ul>
		</template>
		
	</modal>
</template>
<script>
import Modal from './Modal.vue';
import TinySlider from 'vue-tiny-slider';

const farmsafe = {
		title: 'Farm Akamai',
		subtitle: '(Second place winner of Hawaii Agricultural Hackathon (Agathon, Feb 2018))',
		img: 'img/farmsafe_proto1.png',
		bigimg: 'img/farmsafe_big.jpg', 
		github: 'https://github.com/tahahojati/FarmSafe_Agathon_2018_2',
		frameworks:['android'],
		description: "This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.",
		bodyRows:[
			{
				text: "<h2>Introduction and Design</h2> <p>This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.</p>" 
				+ "<p>The app is meant to address an essential issue in the Hawaii Farms.  Every year, a population of farmers and laborers immigrate to Hawaii.  These individuals frequently do not speak English and are not familiar to the American standards of farming.  Currently, there is no affordable way to educate these farmers.  Moreover, department of Agriculture does not have a dependable way to assure that a new farmer is familiar with regulations.  This can lead to food safety issues due to inadequate adherence to safety standards among other issues. </p>"
				+"<p>We chose to develop an application that can teach farmers about Agricultural methods and standards in a variety of languages. We chose the mobile platform over web/desktop as we understood that the app must be available to farmers in the field without any network connection.  Moreover, we wanted a simple design that is mostly self explanatory.  The pictures below show our prototype created using proto.io</p>",
				imgs: '<div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto1.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto2.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto3.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto4.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto5.png" > </div>',
				layout: 2,
			},{
				text: "<h2>Implementation</h2><p> We spent just under 16 consecutive hours implementing the app.  Unfortunately, the version that we presented at the Hackathon could not play videos or administer tests.  However, we are considering the possibility of continuing the project and presenting it to DOA as a solution to a common problem.  We are also aware that training in other languages is necessary in a variety of fields other than farming and plan to watch for other opportunities where this technology can be used to improve efficiency.</p>",
				imgs: '<div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe1.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe2.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe3.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe4.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe5.png" > </div>',
				layout: 2,
			} 
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
<style scoped>
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

#slider-controls li:hover {
    background: #f2f2f2;
}
#slider-controls .prev {
    left: 0;
}
#slider-controls .next {
    right: 0;
} 	
#slider-controls{
	vertical-align: middle;
	padding:0;
	margin: 0 -25px 0 -25px ;
	position: relative;
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