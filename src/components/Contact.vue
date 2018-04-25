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
	<div class="inf-map"> Jacek Jeznach,
		<br/> Poland,ul. Bartosza Głowackiego 28 lok. 22, 20-060 Lublin
		<br/>
		<br/>
		<span>
			<span>@
			</span>: &#106;&#101;&#122;&#110;&#097;&#099;&#107;&#105;&#049;&#051;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
		</span>
	</div>
	<div class="map-wrap">
		<div id="map">
		</div>
	</div>
	<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;
		<br/> &lt;/html&gt;
	</span>
</div>
</template>

<style>
.contact-form{
	opacity: 0.9; 
}
.fade-enter{
	opacity:0;
}
.fade-enter-active{
	transition: opacity 3s ease;
}
</style>