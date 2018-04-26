<template>
<div>
	<div class="my-container container-fluid about" style="opacity:1">
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
			<p>I'm funny! Also, I work hard and love learning. The gaps in my knowledge get smaller everyday because I read everyday.  I am self-taught so you know I have initiative, and since I don't do my learning for the sake of a grade, I do not cram and my knowledge is deep.  I only have a few years of experience but a look at the number of projects on my github will show you that I have a lot of results to show over the years.
			</p>
			<p><strong> Things I like: </strong><br/>pianos and guitars, soccer, tennis, good hikes, money, Paint Nite
			</p>
			<p> <strong> Things I do not like: </strong><br/> bad hikes, politics, lack of ice-cream, most of TV
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
		<div class="fab" @click="openResume()">
			<div class="fab-action-button" tooltip-text="Resume">
				<svg   aria-hidden="true"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
					<path  d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path>

					<!-- M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z -->
				</svg>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import ComponentSlideshow from './Slideshow.vue';
import {Slideshow} from '../data/About';
import resumeUrl from '../assets/resume.pdf';

export default {
	data(){
		return {
			slideshowData: Slideshow,
		};
	},
	components: {
		appSlideshow: ComponentSlideshow
	},
	methods: {
		openResume(){
			window.open(resumeUrl, "_blank");
		}
	}
};
	
</script>

<style >
	.fab{
		position:fixed;
		width:56px;
		right:5%;
		bottom: 5%;
	}
	.fab-action-button{
		padding: 20%;
		position: absolute;
		bottom:0;
		display: block;
		width:56px;
		height: 56px;
		fill:white;
		background-color: #E91E63;
        border-radius: 50%;		
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
	}
	.fab-action-button:hover{
		trasition: box-shadow 1s ease;
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.14), 0 1px 50px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
	}
	.fab-action-button >svg {
		max-height: 100%;
		max-width: 100%;
		margin:0;
	}

	[tooltip-text]:before {
              top: 50%;
              margin-top: -11px;
              font-weight: 600;
              border-radius: 2px;
              background: #585858;
              color: #fff;
              content: attr(tooltip-text);
              font-size: 12px;
              text-decoration: none;
              visibility: hidden;
              opacity: 0;
              padding: 4px 7px;
              margin-right: 12px;
              position: absolute;
              transform: scale(0);
              right: 100%;
              white-space: nowrap;
              transform-origin: top right;
              transition: all .3s cubic-bezier(.25, .8, .25, 1);
            }
            
            [tooltip-text]:hover:before {
              visibility: visible;
              opacity: 1;
              transform: scale(1);
              transform-origin: right center 0;
            }


</style>