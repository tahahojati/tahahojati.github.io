<template>
<div class="my-container container-fluid contact" style="opacity:1">
	<span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;
	</span>
	<div class="text-zone">
		<h1> Contact me
		</h1>
		<p>If you have any questions, please don&#8217;t hesitate to contact using form below&#8230;
		</p>
		<transition name="fade" appear>
			<div class="contact-form">
				<form id="contact" autocomplete="off">
					<ul>
						<li class="half">
							<input class="input__field input__field--hoshi" placeholder="Name" type="text" name="name" />
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li class="half">
							<input class="input__field input__field--hoshi" placeholder="Email" type="email" name="email" />
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li>
							<input class="input__field input__field--hoshi" placeholder="Subject" type="text" name="subject" />
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li>
							<textarea class="input__field input__field--hoshi" placeholder="Message" name="msg">
							</textarea>
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li class="submit">
							<input id="submit" type="submit" class="flat-button" value="SEND"/>
						</li>
					</ul>
				</form>
			</div>
		</transition>
	</div>

	<div class="map-wrap">	
		<div class="inf-map"> Taha Pourjalali,
			<br/> Honolulu, HI 
			<br/> USA
			<br/>
			<span>
				<span>@
				</span>: tpourjalali@gmail.com
			</span>
		</div>
	</div>
	<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;
		<br/> &lt;/html&gt;
	</span>
</div>
</template>

<style scoped>
.contact-form{
	opacity: 0.9; 
}
.fade-enter{
	opacity:0;
}
.fade-enter-active{
	transition: opacity 3s ease;
}
.map-wrap{
	position: relative;
	/*margin:-40px -10px 5px 25px;*/
	background: #AADAFF url('../assets/contact-map.png') center center no-repeat;
	box-shadow: 0 0 20px 5px;
}

.inf-map {
    position: absolute;
    background: #000000;
    top:20px;
    left:20px; 
    z-index: 999999;
    width: 230px;
    padding: 20px;
    color:#fff;
    font-family: "Open Sans", "Helvetica", Arial, sans-serif;
    font-size: 17px;
    font-weight: 300;
    /*opacity: 0;*/
}
.inf-map span {
    font-size: 16px;
}
.inf-map span span {
    color:#00E5FF;
}
@media screen and (min-width: 900px){
	.map-wrap{
		height: 98.5vh;
	}
} 
</style>