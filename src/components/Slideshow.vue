<template>
		<div class="hovercaption-container" >
			<transition name="fade" mode="out-in">
				<img class="hovercaption-image" :src="imgSrc" :key="imgSrc" />
			</transition>
			<div class="hovercaption-body" :style="{'background-color': this.currentImage.color}">
				<h2> {{this.currentImage.caption.heading}} </h2>
				<p> {{this.currentImage.caption.text}} </p>
			</div>
		</div>
</template>

<script>
	export default {
		props: ['slideshow'],
		data(){
			return {
				current_index: 0,
				interval_duration: 6000,
				interval_id: null,
			};
		},
		computed: {
			imgSrc(){
				const rootPath = this.slideshow.rootPath; 
				const image = this.slideshow.images[this.current_index]; 
				return rootPath + image.src; 
			} ,
			currentImage(){
				const index = this.current_index;
				return this.slideshow.images[index];
			}
		},
		methods: {
			startIntervals(){
				this.interval_id = setInterval(() => this.displayNextImage(), this.interval_duration);
			},
			stopIntevalS(){
				if(!this.interval_id) 
					return;
				clearInterval(this.interval_id);
				this.interval_id = null; 
			},
			displayNextImage(){
				const maxNum = this.slideshow.images.length; 
				this.current_index = (this.current_index + 1) % maxNum; 
			}

		},
		mounted(){
			this.startIntervals(); 
		}
	};
</script>

<style>


.hovercaption-container {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
 
.hovercaption-image { 
    background: orange;
    border: solid 1px black;
    padding: 3px;
    display: block; 
    border-radius: 10px;
}
 
.hovercaption-body {
  /*background: rgba(41, 128, 185, 0.7);*/
  bottom: 0;
  color: white;
  font-size: 1em;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: 3.75em 3em;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}
 
.hovercaption-body:hover { opacity: 1; }
 
.hovercaption-body:after,
.hovercaption-body:before {
  border: 1px solid rgba(255, 255, 255, 0.7);
  bottom: 1em;
  content: '';
  left: 1em;
  opacity: 0;
  position: absolute;
  right: 1em;
  top: 1em;
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.6s 0.2s;
  transition: 0.6s 0.2s;
}
 
.hovercaption-body:before {
  border-bottom: none;
  border-top: none;
  left: 2em;
  right: 2em;
}
 
.hovercaption-body:after {
  border-left: none;
  border-right: none;
  bottom: 2em;
  top: 2em;
}
 
.hovercaption-body:hover:after,
.hovercaption-body:hover:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
 
.hovercaption-body h2 { margin-top: 0; }
 
.hovercaption-body p { margin-bottom: 1.5em; }

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 black;
    transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    /*box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);*/
    box-shadow: 0 8px 16px 0 black;
}

.fade-leave-active {

}

.fade-enter-active{
  transition: opacity .5s;
  /*position: absolute;*/
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.hovercaption-container{
	position:relative;
}
.hovercaption-container .hovercaption-image{
	/*position: absolute;*/
	top:0px;
	bottom:0px;
	right: 0px;
	left:0px;
}

</style>