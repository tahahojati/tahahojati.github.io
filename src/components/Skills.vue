<template>
<div class="container skills" style="opacity:1">
	<span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;
	</span>
	<div class="text-zone">
		<h1> Skills &#038; Experience
		</h1>
		<p> I believe that my most important skill is my ability to learn new topics quickly. Rarely does a month go by without me having learned a completely new skill.  Recently, I have focused on learning Android, Vue.js, Google Cloud, AVR programming, and 3D printing.  I also beleive that I am good at modular software design and system design.  These are skills that I have practiced through designing several personal Android apps and Websites.  My other area of strengh is my analytical skills.  I am good at math and anything that relates to it, including graphs and algorithms, statistics, number theory, electronics, physics etc. I am not an expert in those subjects but I can undestand a research paper. 
		</p>
		<p> When it comes to web and app design, I am purely a developer.  I am familiar with current technologies and given a solid functional description of an application, I a confident that I can develop it. That said, I am pretty bad at designing products. In fact all of the design for this portfolio is "inspired" by work of others (though I programed it from scratch). In short, if you want your app -- that you hired me to write for you -- to look both pretty and original, you should also hire a designer because I can only do one of those :). 
		</p>
		<p>
		</p>
	</div>
	<div class="clear">
	</div>
	<div class="skills-charts">
		<div id="myCanvasContainer" style="position:relative">
			<vue-word-cloud :words="wordsObject" :load-font="loadFont" :font-family="font"/>
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
import FontFaceObserver from 'fontfaceobserver';
import {Skills, pickRandomColor, pickRandomColorScheme, pickRandomFont, pickRandomRotation} from '../data/Skills';
export default {
	data(){
		return {
			Skills,
			font:'Abril Fatface',
			colors:[],
			colorScheme: 0,
			rotations: [],
			timeout: null,
		};
	},
	components:{
		VueWordCloud
	},
	computed: {
		wordsObject: function(){
			const mySkills = this.Skills;
			const myColors = this.colors; 
			const myRotations = this.rotations; 
			
			let res = [];
			for(let i =0 ; i< mySkills.length; ++i){
				const word = mySkills[i]; 
				res.push({
					text: word.text,
					weight: word.weight,
					rotation: myRotations[i],
					color: myColors[i],
				});
			}
			return res;
		}, 
	},
	methods: {
		loadFont: function(fontFamily, fontStyle, fontWeight, text) {
			// console.log(fontFamily, fontStyle, fontWeight, text);
			// return (new FontFaceObserver(fontFamily, {
			// 	style: fontStyle,
			// 	weight: fontWeight,
			// })).load(text).then(function(){console.log("font loaded")}, function(err){console.log('error', err);});
		},
		randomizeAndRecompute: function(){
			const count = this.Skills.length; 
			this.font = pickRandomFont(); 
			this.colorScheme = pickRandomColorScheme();
			let colors = [];
			let rotations = [];
			for(let i = 0; i < this.Skills.length; ++i){
				colors.push(pickRandomColor(this.colorScheme));
				rotations.push(pickRandomRotation());
			}
			this.rotations = rotations;
			this.colors = colors; 
		}
	},
	created: function(){
		const self = this; 
		const foo = () => {
			//console.log('foo');
			self.randomizeAndRecompute();
			self.timeout = setTimeout(foo, 10000); 
		};
		foo(); 
	},
	beforeDestroy(){
		clearTimeout(this.timeout);
	},


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
		width: 65%;
		right:10px;
	}
</style>
