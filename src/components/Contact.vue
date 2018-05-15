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
							<input class="input__field input__field--hoshi" placeholder="Name" type="text" name="name" v-model="name"/>
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li class="half">
							<input class="input__field input__field--hoshi" placeholder="Email" type="email" name="email" v-model="email"/>
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li>
							<input class="input__field input__field--hoshi" placeholder="Subject" type="text" name="subject" v-model="subject"/>
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li>
							<textarea class="input__field input__field--hoshi" placeholder="Message" name="msg" v-model="message">
							</textarea>
							<label class="input__label input__label--hoshi input__label--hoshi-color-2" >
							</label>
						</li>
						<li class="submit">
							<input id="submit" type="submit" class="flat-button" value="SEND" @click.prevent="sendEmail"/>
						</li>
					</ul>
				</form>
			</div>
		</transition>
	</div>

	<div class="map-wrap">
		<transition name="slide-up" appear>	
			<div class="inf-map"> Taha Pourjalali,
				<br/> Honolulu, HI 
				<br/> USA
				<br/>
				<span>
					<span>@
					</span>: tpourjalali@gmail.com
				</span>
			</div>
		</transition>
	</div>
	<span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;
		<br/> &lt;/html&gt;
	</span>
	<transition name="snackbar">
		<article class="ui-snackbar-container" v-if="showPopup">
	        <div class="ui-snackbar" transition="ui-snackbar-toggle">
	            <div class="ui-snackbar-text">{{popupMessage}}</div>
            </div>
		</article>
	</transition>

</div>
</template>

<script>
export default {
	data(){
		return {
			awsEmailLambdaUrl: 'https://7chqepj298.execute-api.us-west-2.amazonaws.com/production',
			message:'',
			name: '',
			email: '',
			subject: '',
			waitingMessageHttpRequest: false,
			showPopup: false,
			popupMessage: '',
			popupColor: '',
		}; 
	},
	methods: {
		senddEmail(){
			const message = `From: ${this.name} (${this.email})
			Subject: ${this.subject}
			**************************************
			${this.message}
			`;
			const subject = this.subject;
			const email = this.email;
			let xhr = new XMLHttpRequest(); 
			xhr.open("POST", this.awsEmailLambdaUrl);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = () => this.afterSendMessage(xhr.status);
			xhr.onerror = () => this.afterSendMessage(500);
			const xhrBody = JSON.stringily({subject, email, message});
			this.beforeSendMessage(); 
			xhr.send(xhrBody); 
		},
		sendEmail(){
			this.beforeSendMessage();
			this.afterSendMessage();
		},
		beforeSendMessage(){
			this.waitingMessageHttpRequest = true; 
		},
		afterSendMessage(httpStatus){
			this.waitingMessageHttpRequest = false; 
			let eraseForm = false; 
			if(httpStatus >=200 && httpStatus < 300){
				this.popupMessage = "Message sent! I will get back to you soon";
				this.popupColor = "#28a745";
				this.message = "";
				this.name = "";
				this.message = "";
				this.email = "";
			} else {
				this.popupMessage = "Error occured! Feel free to email me directly";
				this.popupColor = "#dc3545";
			}
			this.showPopup = true; 
			setTimeout(() => this.showPopup = false, 3000);

		},
	}
};
</script>

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

	.slide-up-enter{
		opacity: 0;
		transform: translateY(300px);

	}
	.slide-up-enter-active{
		transition: transform 1s linear, opacity 1.5s ease-in;
	}

	.map-wrap{
		position: relative;
		/*margin:-40px -10px 5px 25px;*/
		background: #AADAFF url('../assets/contact-map.png') center center no-repeat;
		box-shadow: 0 0 20px 5px;
	}

	.inf-map {
		border-radius: 10px;
	    position: absolute;
	    background: #000000;
	    top:20px;
	    left:20px; 
	    z-index: 999999;
	    width: 250px;
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

<!-- Snackbar styles -->
<style scoped>
	.ui-snackbar-container {
	  position: fixed;
	  overflow: hidden;
	  bottom: 0;
	  transition: all 0.5s ease;
	  right: 15px;
	}
	.ui-snackbar {
	  display: inline-flex;
	  align-items: center;
	  min-width: 288px;
	  max-width: 568px;
	  min-height: 48px;
	  padding: 14px 24px;
	  margin: 4px 4px 8px 4px;
	  border-radius: 2px;
	  background-color: #323232;
	  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
	.ui-snackbar-text {
	  font-size: 14px;
	  /*color: #fff;*/
	}
	/*.ui-snackbar-action {
	  margin-left: auto;
	  padding-left: 48px;
	}*/
	/*.ui-snackbar-action button {
	  border: none;
	  background: none;
	  margin: 0;
	  padding: 0;
	  font-size: 14px;
	  text-transform: uppercase;
	  color: #ffeb3b;
	}*/
	.snackbar-leave-active, .snackbar-enter {
	  transform: tranlateX(100px);
	}
	.ui-snackbar-toggle-transition .ui-snackbar-text,
	.ui-snackbar-toggle-transition .ui-snackbar-action {
	  opacity: 1;
	  transition: opacity 0.3s ease;
	}
	.ui-snackbar-toggle-enter,
	.ui-snackbar-toggle-leave {
	  transform: translateX(100px);
	}
	.ui-snackbar-toggle-enter .ui-snackbar-text,
	.ui-snackbar-toggle-leave .ui-snackbar-text,
	.ui-snackbar-toggle-enter .ui-snackbar-action,
	.ui-snackbar-toggle-leave .ui-snackbar-action {
	  opacity: 0;
	}
</style>