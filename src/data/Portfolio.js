//require all images under assets/projects
// let pp = require('../assets/projects/farmsafe_proto1.png');
const requireImages = require.context('../assets/projects/', true);
//console.log(pp);


class Project {
	constructor(
		{
			id=null, 
			title=null,
			subtitle=null,
			cardTitle=null,
			importance=1,
			sorting=1,
			tags = null,
			techs=[],
			cardBackgroundColor='tranparent',
			decoration=null,
			cardImage = '',
			cardText = '',
			cardTextHtml = null, 
			slides = [],
			github = null, 
			live = null, 
			cardSubtitle = null,
		} = {}){
		this.id = id;
		this.title = title;
		if(this.cardTitle !== '')
			this.cardTitle = cardTitle || title;
		this.importance = importance;
		this.sorting = sorting;
		this.techs = techs;
		this.tags = tags||techs;
		if(this.tags[0] === '__techs__'){ 
			this.tags.shift();
			this.tags = this.tags.concat(this.techs);
		}
		this.cardBackgroundColor = cardBackgroundColor;
		this.decoration = decoration;
		this.cardImage = cardImage || 'http://materializecss.com/images/sample-1.jpg';
		this.cardText = cardText;
		this.cardTextHtml = cardTextHtml;
		this.slides = slides;
		this.github = github;
		this.live = live;
		if(this.cardSubtitle !== '')
			this.cardSubtitle = cardSubtitle || subtitle;
	};
	getCardStyle(){
		return {background: this.cardBackgroundColor};
	};
};
Project.Slide = class {
	constructor({
		layoutComponent = 'ModalViewImgLeft',
		data = {},
		title = '',
		animation = '',
		appearCallback = null,
		disappearCallback = null, 
	} = {}){
		this.layoutComponent = layoutComponent;
		this.data = data;
		this.title = title;
		this.animation = animation;
		this.appearCallback = appearCallback;
		this.disappearCallback = disappearCallback;
	};
};
Project.projectList = {};
Project.projectList.opihi = new Project({
	id:1,
	cardBackgroundColor:'grey',
	title: 'OPIHI: Our Project in Hawaii\'s Intertidal',
	cardTitle: 'opihi',
	subtitle: 'Curriculum Research and Development Group - University of Hawaii',
	cardSubtitle: '',
	techs: ['Zend', 'Bootstrap', 'D3', 'jQuery'],
	tags: ['__techs__', 'Front-End Development', 'Full-Stack Development', 'JavaScript', 'PHP', 'MySQL', 'Web' ],
	cardText: 'a web application for collecting and analyzing scientific data generated by Hawaii\'s most diligent students!',
	live: 'https://opihi.crdg.hawaii.edu/',
	cardImage: requireImages('./opihi/cardImage-opihi.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./opihi/OPIHI-pre.png'),
				contentText: null,
				contentHtml: '<h2> Introduction </h2> <p> OPIHI is a school-based monitoring program of Hawaii’s rocky intertidal where students improve their scientific skills while providing assistance gathering data in an area that has not been well studied in Hawaii. <br> <br> While taking part in OPIHI, students learn about topics in marine ecology and conservation, species identification, and sampling techniques. Most importantly, students build their confidence and interest in science. OPIHI provides opportunities for students to develop and investigate their own questions within the framework of monitoring biodiversity in the intertidal. </p> <p>I developed this website to collect and analyze the data produced by the participants.  The website is online at <a href="http://opihi.crdg.hawaii.edu/" target="_blank">https://opihi.crdg.hawaii.edu/</a>.</p></div>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'360px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Development',
			data: {
				mode:'img',
				imgSrc: requireImages('./opihi/OPIHI2.png'),
				contentHtml:'<h2 class="text-center">Development</h2><p style="text-align:initial"> I acted as the lead developer to design a website and database in order to facilitate data input for the students. The backend was developed with php and Zend Framework and MySQL. The front-end was developed using jQuery, Bootstrap, and D3.js.  It was designed to be flexible in options that it offers to the teachers, and the students while also enforcing common sense scientific rigors necessary for data collection and entry.</p>',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Data Analysis',
			data: {
				mode:'img',
				imgSrc: requireImages('./opihi/OPIHI1.png'),
				contentHtml:'<h2>Try it!</h2><p style="text-align:initial">While most of the functionality of the website requires a password, the data collected in the project is publicly available. You may visit the website to download all of the data or use our visual analytics tools to compare the state of intertidal to how it was in previous years. If you have any feedback, please feel free to email me or the CRDG team :) <p>',
			}
		}),
	],

});
Project.projectList.asshto = new Project({
	id:2,
	cardBackgroundColor:'grey',
	title: 'AASHTO LRFD Design Software',
	cardTitle: 'AASHTO calculator',
	subtitle: 'Angular Single Page Application',
	cardSubtitle: '',
	techs: ['Angular', 'Bootstrap', 'Mean'],
	tags: ['__techs__', 'Front-End Development', 'Full-Stack Development', 'JavaScript', 'MongoDb', 'Node', 'Web' ],
	cardText: 'a web application that assists structural engineers in their Aashto LFRD bridge designs through performing calculations and generating pdf reports.',
	live: 'http://aashtobridgedesign.com/',
	cardImage: requireImages('./aashto/cardImage-aashto.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./aashto/aashto.png'),
				contentText: null,
				contentHtml: '<h2> Introduction </h2> <p style="text-align:initial"> This website assists structural engineers in their Aashto LFRD bridge design through providing important calculations and saving them on cloud for later access. The calculations can be converted to pdf documents and printed at users\'s request. <br> The website is live at <a href="http://aashtobridgedesign.com/">http://aashtobridgedesign.com/</a>.  You will need to register for a free account in order to use the website. </p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'360px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Development',
			data: {
				mode:'img',
				imgSrc: requireImages('./aashto/aashto1.png'),
				contentHtml:'<h2 class="text-center">Development</h2><p style="text-align:initial"> I developed the website using node.js and MEAN stack framework (MongoDb, Express, Angular, Node). I designed the backend with SOA philosophy (Service Oriented Architecture) in mind, so that it can easily support mobile app clients or external api requests. The front-end is developed as a single page application using Angular.js.  <br/> The application is hosted on an Ubuntu droplet on DigitalOcean.  The code for the project is not available on my github though I am open to sharing it if requested.</p>',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgOnly',
			title: 'Calculations',
			data: {
				mode:'img',
				imgSrc: requireImages('./aashto/aashto2.png'),
				contentHtml:'',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgOnly',
			title: 'Reports',
			data: {
				mode:'img',
				imgSrc: requireImages('./aashto/aashto3.png'),
				contentHtml:'',
			}
		}),
	],

});
Project.projectList.farmsafe = new Project({
	id:3,
	cardBackgroundColor:'grey',
	title: 'Farm Akamai',
	cardTitle: null,
	subtitle: 'Second place winner of Hawaii Agricultural Hackathon (Agathon 2018)',
	cardSubtitle: null,
	github: 'https://github.com/FarmEd-HI/FarmEd-Android',
	techs: ['Android'],
	tags: ['__techs__', 'contest', 'Hackathons'],
	cardText: 'Winner of 2018 Hawaii Agricultural Hackathon <br/> an Android app designed to teach ESL farmers about the state\'s standards.',
	live: null,
	cardImage: requireImages('./farmsafe/cardImage-farmsafe.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./farmsafe/farmsafe_big.jpg'),
				contentText: null,
				contentHtml: '<h2> Introduction </h2> <p style="text-align:initial"> In the 2018 Hawaii Agricultural Hackathon, we were presented with a challenge from the industry insiders.  Many of laborers in Hawaii\'s farms are immigrants who are not fluent in English.  These farmers have difficulty follwing standards of work and farming in United States.  The challenge was to implement a low-cost and easy to use solution for such farmers. <br/> I teamed up with two other developers and together we designed an Android app that would allow farm laborers to educate themselves in their native language and without access to internet.  Our app was recognized as the second best project in the Hackathon earning us $2000 and a big sense of achievement.</p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Design',
			data: {
				mode:'component',
				objectData: {
					// data must be an array image paths
					imagePaths: [
						requireImages('./farmsafe/farmsafe_proto1.png'),
						requireImages('./farmsafe/farmsafe_proto2.png'),
						requireImages('./farmsafe/farmsafe_proto3.png'),
						requireImages('./farmsafe/farmsafe_proto4.png'),
						requireImages('./farmsafe/farmsafe_proto5.png'),
					],
				},
				objectComponent: 'ModalViewImgImgSlideshow',
				contentHtml:'<h2 class="text-center">Design</h2><p style="text-align:initial"> We designed the app using proto.io as seen on the side.  We chose the mobile platform over web/desktop as we understood that the app must be available to farmers in the field who do not necessarily have internet connection.   Moreover, we wanted a simple design that was mostly self-explanatory. <br/> The foundation of the design was to provide farmers with a set of mutimedia enabled courses in farming standards. We also wanted to make it possible for the farmer to have access to a knowledge base or FAQs of farming and to be able to ask question from experts if they needed to. </p>',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Development',
			data: {
				mode:'component',
				objectComponent: 'ModalViewImgImgSlideshow',
				objectData: {
					imagePaths: [
						requireImages('./farmsafe/farmsafe1.png'),
						requireImages('./farmsafe/farmsafe2.png'),
						requireImages('./farmsafe/farmsafe3.png'),
						requireImages('./farmsafe/farmsafe4.png'),
						requireImages('./farmsafe/farmsafe5.png'),
					],
				},
				contentHtml:'<h2 class="text-center">Development</h2><p style="text-align:initial"> As the only developer on the team familiar with the Android platform, I led our development efforts.  In the course of 18 hours and after many cups of coffee we were able to create the partial prototype seen on the side.  My team and I are still hoping to develop the app further and hopefully release it as a final product on Google Play store at some point. </p>',
			}
		}),		
	],

});
Project.projectList.ristorante = new Project({
	id:4,
	cardBackgroundColor:'grey',
	title: 'Ristorante con Fusion',
	cardTitle: 'Ristorante',
	subtitle: 'Angular Single Page Application',
	cardSubtitle: '',
	techs: ['Angular', 'Bootstrap', 'Mean', 'Ionic'],
	tags: ['__techs__', 'Front-End Development', 'Full-Stack Development', 'JavaScript', 'MongoDb', 'Node', 'Web', 'Mobile' ],
	github: 'https://github.com/tahahojati/conFusion-Angular',
	cardText: 'a web and a hybrid mobile application for a fictitious restaurant, built using AngularJS, Ionic, and Node.js.',
	live: null,
	cardImage: requireImages('./ristorante/cardImage-ristorante.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./ristorante/ristorante.png'),
				contentText: null,
				contentHtml: '<h2> Ristorante con Fusion </h2> <p style="text-align:initial"> This project is a single page application for a fictitious restaurant, built using AngularJS. I created this website by following coursera\'s online courses on Full Stack Development.  The backend of the the web app was designed using Express.js and MondoDb.  You may find the code for the project on my github at <a href="https://github.com/tahahojati/conFusion-Angular">https://github.com/tahahojati/conFusion-Angular/</a>.</p><p>I also created a hybrid mobile app for the restaurant using ionic platform. You may find the code for the hybrid app on <a href="https://github.com/tahahojati/conFusion-Ionic">its own github page</a>. </p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'260px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Website',
			data: {
				mode:'component',
				objectComponent: 'ModalViewImgImgSlideshow',
				objectData: {
					imagePaths: [
						requireImages('./ristorante/ristorante1.png'),
						requireImages('./ristorante/ristorante2.png'),
						requireImages('./ristorante/ristorante3.png'),
					],
				},
				contentHtml:'<h2 class="text-center">Web Application</h2><p style="text-align:initial">The website features: <ol><li>A home page that shows the restaurant\'s latest promotions</li> <li> A menu page that allows guests to choose the food category they would like to explore by choosing a tab </li> <li>Singular item pages that allow the guests to submit their feedback using a form. The form is validated using Angular\'s form validation capabilities </li></p>',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Mobile Apps',
			data: {
				mode:'component',
				objectComponent: 'ModalViewImgImgSlideshow',
				objectData:{
					imagePaths: [
						requireImages('./ristorante/ristorante-splsh.png'),
						requireImages('./ristorante/ristorante-sidebar.png'),
						requireImages('./ristorante/ristorante-home.png'),
						requireImages('./ristorante/ristorante-about.png'),
						requireImages('./ristorante/ristorante-register.png'),
						requireImages('./ristorante/ristorante-reserve.png'),
						requireImages('./ristorante/ristorante-menu.png'),
						requireImages('./ristorante/ristorante-menu2.png'),
						requireImages('./ristorante/ristorante-menu3.png'),
						requireImages('./ristorante/ristorante-favorites.png'),
					],
				},
				contentHtml:'<h2 class="text-center">Mobile App</h2><p style="text-align:initial">The app design takes advantage of ionic\'s splash screen and side bar view for a native look. Angular UI Router was used to set up the navigation <br/><br/> Throughout the app resources are loaded dynamically via AJAX requests to a local server using the ngResource modul of angular. This includes the text and the images in the home page, the list of dishes in the menu page and the list of restaurant founders in the about page. <br/><br/> Ionic modals were used extensively in design of the login and register views as well as reservation capability of the app. Cordova\'s wrappers were used in the project to access native device functions such as taking a picture with camera or choosing a picture from gallery. <br/><br/>HTML5 local storage was used to persist data in JSON format between sessions of the app. Cordova wrappers were used to provide pop-up messages and notification messages in reacion to user\'s choices.</p>',
				
			}
		}),	
	],

});



export  let projects = Project.projectList;