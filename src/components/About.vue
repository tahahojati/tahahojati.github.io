<template>
<div>
	<div class="container about" style="opacity:1">
		<span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;
		</span>
		<div class="text-zone">
			<h1> About me
			</h1>
			<p> I loved math and science since I was a kid. Writing code and making electronics were my side "hobbies" until I graduated from college in 2016.  I have a B.S. in physics; hopefully some day, I will have a noble prize in physics <strong>;-)</strong>
			</p>
			<p><strong>Why you should not hire me:</strong></p>
			<p>I do not have a computer science degree.  I may be able to code and have completed a bunch of projects but there are glaring gaps in my knowledge of computers. Also, I have been only working for a few years; I'm a junior dev.
			</p>
			<p>
				<strong>Why you should hire me:</strong>
			</p>
			<p>I'm funny! Also, I work hard and love learning. The gaps in my knowledge get smaler everyday because I read everyday.  I am self-taught so you know I have initiative, and since I don't do my learning for the sake a grade, I do not cram and my knowledge is deep.  I only have a few years of experience but a look at the number of projects on my github will show you that I have a lot of result to show for those years.
			</p>
			<p><strong> Things I like: </strong><br/>pianos and guitars, soccer, tennis, good hikes, money, Paint Nite
			</p>
			<p> <strong> Things I do not like: </strong><br/> bad hikes, politics, lack of ice-cream, most of TV
				<p>
				</p>
				<p>&nbsp;
				</p>
				<div class="clear">
				</div>
			</div>
			<div class="sound-cloud card">
			<app-slideshow :slideshow="slideshowData"></app-slideshow>
		</div>
		<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;
			<br/> &lt;/html&gt;
		</span>
	</div>
</div>
</template>
<script>
import ComponentSlideshow from './Slideshow.vue';
import {Slideshow} from '../data/About';
export default {
	data(){
		return {
			slideshowData: Slideshow,
		};
	},
	components: {
		appSlideshow: ComponentSlideshow
	}
};
	
</script>