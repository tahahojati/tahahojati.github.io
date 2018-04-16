<template>
<div class="container skills" style="opacity:1">
	<span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;
	</span>
	<div class="text-zone">
		<h1> Skills &#038; Experience
		</h1>
		<p>I am mostly 
		</p>
		<p>
		</p>
		<p>
		</p>
		<p>
		</p>
	</div>
	<div class="clear">
	</div>
	<div class="skills-charts">
		<div id="myCanvasContainer" style="width:100%; position:relative">
			<vue-word-cloud :words="Skills" :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
  font-family="Roboto" />
  		</div>
				
<!-- 			<canvas width="500" height="500" id="myCanvas">
			<!-- TODO: add the sphere of skills - ->
			</canvas> -->
	<!-- 	<div ref="wordcloudDiv" id="wordcloudDiv">

		</div> -->
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
// import {TagCanvas} from '../external/tagcanvas29';
// import {WordCloud} from '../external/wordcloud.js'; 

// export default {
// 	data(){
// 		return {
// 			wordcloud: null,
// 		};
// 	},

// 	mounted(){
// 		// console.log(Object.getOwnPropertyNames(TagCanvas));
// 		// console.log(TagCanvas.Start);
// 		// TagCanvas.Start('#myCanvas');
// 		// console.log(WordCloud);
// 		this.wordcloud = new WordCloud(this.$refs.wordcloudDiv);
// 		let words =  "Angular Node Express Python C++"
//             .replace(/[!\.,:;\?]/g, '')
//             .split(' ')
//             .map(function(d) {
//                 return {text: d, size: 10 + Math.random() * 60};
//             }); 
//         console.log(words);
//         this.wordcloud.draw(words);
// 	}
// }; -->

</script>

<style>
	.skills-charts {
		opacity: 1;
	}
</style>
