<template>
	<div class="hovercaption-container">
		<img class="hovercaption-image" :src="imgSrc"/>
		<div class="hovercaption-body">
			<h2> {{currentImage.heading}} </h2>
			<p> {{currentImage.text}} </p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['slideshow'],
		data(){
			return {
				current_index: 0,
				interval_duration: 4000,
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
				return this.slideshow.images[this.current_index];
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