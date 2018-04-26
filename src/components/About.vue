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
	</div>
	<div class="fab">
		<span class="fab-action-button" tooltip-text="Resume">
			<i class=""></i>
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

<style >
	.fab{
		position:fixed;
		width:56px;
		right:20px;
		bottom: 20px;
	}
	.fab-action-button{
		position: absolute;
		bottom:0;
		display: block;
		width:56px;
		height: 56px;
		background-color: white; 
		background-image:  url('data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJmaWxlLXBkZiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtZmlsZS1wZGYgZmEtdy0xMiBmYS03eCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTgxLjkgMjU2LjFjLTUtMTYtNC45LTQ2LjktMi00Ni45IDguNCAwIDcuNiAzNi45IDIgNDYuOXptLTEuNyA0Ny4yYy03LjcgMjAuMi0xNy4zIDQzLjMtMjguNCA2Mi43IDE4LjMtNyAzOS0xNy4yIDYyLjktMjEuOS0xMi43LTkuNi0yNC45LTIzLjQtMzQuNS00MC44ek04Ni4xIDQyOC4xYzAgLjggMTMuMi01LjQgMzQuOS00MC4yLTYuNyA2LjMtMjkuMSAyNC41LTM0LjkgNDAuMnpNMjQ4IDE2MGgxMzZ2MzI4YzAgMTMuMy0xMC43IDI0LTI0IDI0SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNFYyNEMwIDEwLjcgMTAuNyAwIDI0IDBoMjAwdjEzNmMwIDEzLjIgMTAuOCAyNCAyNCAyNHptLTggMTcxLjhjLTIwLTEyLjItMzMuMy0yOS00Mi43LTUzLjggNC41LTE4LjUgMTEuNi00Ni42IDYuMi02NC4yLTQuNy0yOS40LTQyLjQtMjYuNS00Ny44LTYuOC01IDE4LjMtLjQgNDQuMSA4LjEgNzctMTEuNiAyNy42LTI4LjcgNjQuNi00MC44IDg1LjgtLjEgMC0uMS4xLS4yLjEtMjcuMSAxMy45LTczLjYgNDQuNS01NC41IDY4IDUuNiA2LjkgMTYgMTAgMjEuNSAxMCAxNy45IDAgMzUuNy0xOCA2MS4xLTYxLjggMjUuOC04LjUgNTQuMS0xOS4xIDc5LTIzLjIgMjEuNyAxMS44IDQ3LjEgMTkuNSA2NCAxOS41IDI5LjIgMCAzMS4yLTMyIDE5LjctNDMuNC0xMy45LTEzLjYtNTQuMy05LjctNzMuNi03LjJ6TTM3NyAxMDVMMjc5IDdjLTQuNS00LjUtMTAuNi03LTE3LTdoLTZ2MTI4aDEyOHYtNi4xYzAtNi4zLTIuNS0xMi40LTctMTYuOXptLTc0LjEgMjU1LjNjNC4xLTIuNy0yLjUtMTEuOS00Mi44LTkgMzcuMSAxNS44IDQyLjggOSA0Mi44IDl6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+') contain;
		/*background-color:#29B6F6;*/
		color: white;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
	}
	.fab-action-button > i {
		display: inline-block;
		width:56px;
		height: 56px;
		
		/*background: ;*/
	}
</style>