<template>
<div class="container skills" style="opacity:1">
	<span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;
	</span>
	<div class="text-zone">
		<h1> Skills &#038; Experience
		</h1>
		<p>Main area of my expertise is front end development and everything related with this side of web.   HTML,CSS, JS (ES5,ES6), building small &amp; medium Web Apps, Angular , Vue.js, building custom plugins, features, animations and just coding layouts.
		</p>
		<p>Often I work as a full-stack develeoper  &#8211; mainly in Lamp environment, PHP and open source CMS&#8217;s like (WordPress, Drupal, Magento, Typo 3 etc..) .
		</p>
		<p>I have also some experience with Node.js,  Mongo DB (Keystone.JS).
		</p>
		<p>Would like to know more?
			<br /> Please check my
			<a href="https://www.linkedin.com/in/jacek-jeznach-0a99b640" target="_blank">LinkedIn
			</a> profile or just
			<a href="/contact">contact
			</a> me.
		</p>
	</div>
	<div class="clear">
	</div>
	<div class="skills-charts">
		<div id="myCanvasContainer" style="width:100%; position:relative">
			<vue-word-cloud :words="Skills" :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
  font-family="Roboto" />
				
<!-- 			<canvas width="500" height="500" id="myCanvas">
			<!-- TODO: add the sphere of skills - ->
			</canvas> -->
		</div>
	</div>
	<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;
		<br/> &lt;/html&gt;
	</span>
</div>
</template>

<script>
import VueWordCloud from 'vuewordcloud';
import {Skills} from '../data/Skills';
export default {
	data(){
		return {
			Skills
		};
	},
	components:{
		VueWordCloud
	}


}


</script>