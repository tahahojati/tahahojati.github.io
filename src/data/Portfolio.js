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
Project.projectList.portfolio = new Project({
	id:0,
	cardBackgroundColor:'grey',
	title: 'Portflio',
	cardTitle: null,
	subtitle: '',
	cardSubtitle: null,
	github: '',
	techs: ['Android', 'Vue', 'Angular', 'Bootstrap'],
	tags: ['__techs__', 'Front-End'],
	cardText: 'if you are curious about my old and new Developer portfolios',
	live: null,
	cardImage: requireImages('./developer_portfolio/cardImage-developer_portfolio.png'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./developer_portfolio/new_dev_portfolio.png'),
				contentText: null,
				contentHtml: '<h2> My Portflio </h2> <p style="text-align:initial"> The portflio you are viewing is not the only one I have created. It is however, the latest.  I wrote this website using Vue.js and am hosting it on Amazon AWS. The code for this website is available on my <a href="https://github.com/tahahojati/tahahojati.github.io/tree/vue"> github </a>, so feel free to take a look.  I work on this portfolio in my spare time; it is a work in progress and not that well tested hehe. So let me know if something is broken (or if you want to hire me) :)</p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Introduction',
			data: {
				mode:'component',
				objectData: {
					// data must be an array image paths
					imagePaths: [
						requireImages('./developer_portfolio/android_dev_portfolio_image1.png'),
						requireImages('./developer_portfolio/android_dev_portfolio_image2.png'),
					],
				},
				objectComponent: 'ModalViewImgImgSlideshow',
				contentHtml:'<h2 class="text-center">Android Portflio</h2><p style="text-align:initial"> I consider creating portfolios a great way to practice software development: they pose a moderate level of difficulty and the outcome is generally useful.  I wrote this Android app when I was just starting to get comfortable with Android and wanted to practice using components such as CardView and CoordinatorLayout.  If you want to look at the app, you can find it on my <a href="https://github.com/tahahojati/Android_portfolio_app">github</a>.</p>',
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./developer_portfolio/old_dev_portfolio.png'),
				contentText: null,
				contentHtml: '<h2> My old portflio </h2> <p style="text-align:initial"> Long ago, I used to be pretty good at Angular.  So one weekend I sat down and made a portfolio website for myself and hosted it on github pages.  It is still online <a href="https://tahahojati.github.io">here</a>.  It doesn\'t have all the bells and whistles of this website, but sometimes I think its simpllicity makes it even better.  <a href="https://tahahojati.github.io">Take a look at it </a> and its code on <a href="https://github.com/tahahojati/tahahojati.github.io/tree/master">github</a> and remember, I can do Angular (or at least kinda used to).</p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
	],

});

Project.projectList.reflex_game = new Project({
	id:0,
	cardBackgroundColor:'grey',
	title: 'Reflex Game',
	cardTitle: null,
	subtitle: 'An Android game to test your reflexes',
	cardSubtitle: null,
	github: 'https://github.com/tahahojati/ReflexGame',
	techs: ['Android'],
	tags: ['__techs__',],
	cardText: 'An Android game to test your reflexes',
	live: null,
	cardImage: requireImages('./reflex_game/cardImage-reflex_game.png'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgOnly',
			title: 'Introduction',
			data: {
				mode:'img',
				getObjectStyle(){return{
					border: '3px solid black',
					width: '100%'
				}},
				imgSrc: requireImages('./reflex_game/reflex_playthrough.gif'),
				contentText: null,
				getContentStyle(){return {background:'#d2d2d259'}},
				// getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgOnly',
			title: 'Introduction',
			data: {
				mode:'text',
				getObjectStyle(){return{
					margin:'10px',
				}},
				contentHtml: '<article><h3>Overview</h3><p>This is a simple Android game. The objective of the game is to tap the circle spots on the screen before they disappear.  You start with 5 lives and the game ends when you lose all of them.</p><h3>Download</h3><p>This app is not available on Google play (maybe after some enhancements!). For now, you may download <a href="https://github.com/tahahojati/ReflexGame/blob/master/readme/app-debug.apk">the apk</a> and install it on your Android phone via usb.  Alternatively, you can clone the repo and use Android Studio to run the app on your Android phone.</p><h3>Future enhancements</h3><p>I had bigger dreams for this game. It\'s easy to see it becoming the new Flappy Bird.  But I think I have already implemented what I initially set out to implement and it is time to move on. I will likely add the ability to share the highscores on social media at some point and release the game... idk..</p></article>',
				// getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgOnly',
			title: 'Introduction',
			data: {
				mode:'text',
				getObjectStyle(){return{
					margin: '20px',
				}},
				contentHtml: '<article><h3>Development</h3><p>I developed this app using only Android SDK and Java. Here are some of the challenges I faced:</p><ul style="list-style: square"><li>Architecture: from the beginning I wanted to design the app in a way that separated game logic from the view logic. With this purpose, I divided the majority of logic for the game in three classes: 1) Game - a classes representing the state of the game, 2) GameRunner - the class performing all of the game logic and 3) GameView - an interface describing all that was required of the view layer; the interface was implemented by my Activity.</li><li>Parallel processing: I implemented this app such that the game logic runs in a secondary thread.  Implementing this was hard.  I wanted a dedicated thread to which I could submit my game logic as a runnable.  I could not achieve the effect I wanted using standard ExecutorServices and Looper/Handler Threads, however what I designed looks a little like a looper thread.</li><li>Animations and collision detection: working with Android\'s animators is not that intuitive, but the real challenge here was to code the spots\' movements such that they would bounce from the walls. A typical game engine might do this using collision detection, but I thought that was an overkill for this game. What I set out to do was instead to figure out the trajectory of each spot at the moment of its creation and figure out when and how it should bounce from the borders of the layout. I then created an Android ObjectAnimator for each spot that contained the bouncing informaion. I do not remember how I coded this, but I am proud of the result. </li></ul></article>',
				// getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		
	],

});

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


Project.projectList.popularmovies = new Project({
	id:3,
	cardBackgroundColor:'grey',
	title: 'Poppin\' Movies',
	cardTitle: null,
	subtitle: '',
	cardSubtitle: null,
	github: 'https://github.com/tahahojati/popularmovies',
	techs: ['Android'],
	tags: ['__techs__'],
	cardText: 'It turns out you are the only one who hasn\'t watched the new Avengers!!??',
	live: null,
	cardImage: requireImages('./popularMovies/cardImage-popularMovies.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./popularMovies/popular_movies_use.gif'),
				contentText: null,
				contentHtml: '<h2> Introduction </h2> <p style="text-align:initial"> Poppin\' Movies is an Android client for <em>themoviedb.org</em>. It allows users to see a list of movies that are currently playing in theaters and to add the movies to their list of favorites.  The saves the favorite movies on phone\'s storage so they are available when offline.  In addition, the app provides a movie ContentProvider that can be used by other apps.</p> <p>This project is still under development (for the next few weeks at least).  The code for project is available on <a href="https://github.com/tahahojati/popularmovies" target="_blank"> github </a>.  Once finished, you may also download the apk from there to test the app on your phone.</p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
	],

});

Project.projectList.criminalIntent = new Project({
	id:3,
	cardBackgroundColor:'grey',
	title: 'Criminal Intent',
	cardTitle: null,
	subtitle: '',
	cardSubtitle: null,
	github: 'https://github.com/tahahojati/Android_CriminalIntent',
	techs: ['Android'],
	tags: ['__techs__'],
	cardText: 'Stop crime, save the world!',
	live: null,
	cardImage: requireImages('./criminalIntent/cardImage-criminalIntent.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Introduction',
			data: {
				mode:'img',
				imgSrc: requireImages('./criminalIntent/criminalIntent_big.png'),
				contentText: null,
				contentHtml: '<h2> Introduction </h2> <p style="text-align:initial"> CriminalIntent records the details of “office crimes” – things like leaving dirty dishes in the breakroom sink or walking away from an empty shared printer after documents have printed.<br/>With CriminalIntent, you can make a record of a crime including a title, a date, and a photo. You can also identify a suspect from your contacts and lodge a complaint via email, Twitter, Facebook, or another app. After documenting and reporting a crime, you can proceed with your work free of resentment and ready to focus on the business at hand.</p> <p>The code for project is available on <a href="https://github.com/tahahojati/Android_CriminalIntent" target="_blank"> github </a>.  You may also download the apk from there to test the app on your phone. </p>',
				getContentStyle(){return {background:'#d2d2d259'}},
				getObjectStyle(){return {width: '100%', height:'auto', 'min-height': '200px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Design',
			data: {
				mode:'img',
				imgSrc:  requireImages('./criminalIntent/criminalIntent_big.png'),
				// objectData: {
				// 	// data must be an array image paths
				// 	imagePaths: [
				// 		requireImages('./criminalIntent/criminalIntent_proto1.png'),
				// 		requireImages('./criminalIntent/criminalIntent_proto2.png'),
				// 		requireImages('./criminalIntent/criminalIntent_proto3.png'),
				// 		requireImages('./criminalIntent/criminalIntent_proto4.png'),
				// 		requireImages('./criminalIntent/criminalIntent_proto5.png'),
				// 	],
				// },
				objectComponent: 'ModalViewImgImgSlideshow',
				contentHtml:'<h2 class="text-center">Design</h2><p style="text-align:initial">  Development </h2> I wrote the app as a practice project for android development.  The app uses Fragments and displays different UI\'s depending on the size of the device (phones vs tablets).  I took advantage of Android\'s sqlite and ShareCompat classes to develop the app. <br/> <h2> Future enhancements</h2> It is easy to imagine this app as an internet connected app.  Maybe it can be connected to slack. There are lots of possibilities! </p>',
			}
		}),	
	],

});

Project.projectList.farmsafe = new Project({
	id:7,
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

Project.projectList.javascript_games = new Project({
	id:8,
	cardBackgroundColor:'grey',
	title: 'JavaScript and Phaser.io Games',
	cardTitle: 'Browser Games',
	subtitle: '',
	cardSubtitle: '',
	techs: ['Phaser', 'Vue'],
	tags: ['__techs__', 'Front-End Development', 'JavaScript', 'Web' ],
	github: '',
	cardText: 'Number of simple games written using JavaScript and various libraries including Phaser.io and Vue.js',
	live: null,
	cardImage: requireImages('./javascript_games/cardImage-javascript_games.jpg'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Virtual Pet',
			data: {
				mode:'img',
				imgSrc: requireImages('./javascript_games/virtual_pet_play.gif'),
				contentText: null,
				contentHtml: '<h2> Virtual Pet </h2> <p style="text-align:initial">  Virtual pet is a game about keeping your pet happy and healthy.  I wrote this game while going through a Udemy course about Phaser.io. I am interested in game development for two reasons: <ol><li>application of aritificial intelligence and </li> <li>using games as engaging media for education</li> </ol> I also find game development interesting due to the challenges of state management, reactive programming, and real-time processing that are required in games.  </p> <p> You can find the code for this project on <a href="https://github.com/tahahojati/virtual_pet_game" >github</a> or play the game <a href="https://tahahojati.github.io/virtual_pet_game/" target="_blank" title="Virtual Pet Live!">here</a>.</p>',
				// getContentStyle(){return {background:'#d2d2d259'}},
				// getObjectStyle(){return {width: '100%', height:'260px', 'object-fit': 'cover'}},
			},
		}),
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Monster Slayer',
			data: {
				mode:'img',
				imgSrc: requireImages('./javascript_games/monster_slayer_gameplay.gif'),
				contentHtml:'<h2 class="text-center">Monster Slayer </h2> <p> Monster slayer is a simple browser game developed using Vue.js.  I wrote this game while going through a Udemy course on Vue.js. <br/> This project is hosted on github at <a href="https://github.com/tahahojati/vue_monster_slayer"> https://github.com/tahahojati/vue_monster_slayer </a> and you can play the game by going <a href="https://tahahojati.github.io/vue_monster_slayer" title="Monster Slayer-Live!"> here </a>.</p>',
			}
		}),		
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Frogger',
			data: {
				mode:'img',
				imgSrc: requireImages('./javascript_games/frogger_gameplay.gif'),
				contentHtml:'<h2 class="text-center">Frogger</h2><p style="text-align:initial">This project is a replica of the arcade game frogger. I coded this game using only vanilla javascript as a part of my participation in Udacity\'s Front-End Developer Nanodegree.<br/> You can view the code for this project on <a href="https://github.com/tahahojati/FEWP3-Frogger">github</a> and play the game by visiting <a href="https://tahahojati.github.io/FEWP3-Frogger">here</a>.</p>',
			}
		}),	
		new Project.Slide({
			layoutComponent: 'ModalViewImgTop',
			title: 'Farm Animals!',
			data: {
				mode:'img',
				imgSrc: requireImages('./javascript_games/farmanimals_phaser_gameplay.gif'),
				contentHtml:'<h2 class="text-center">Farm Animals</h2><p style="text-align:initial">This is another game developed with Phaser.io.<br/>You can play the game <a href="https://tahahojati.github.io/farm_animals_game_phaser_js">here</a>.  Alternaviely, simply download or clone the <a href="https://github.com/tahahojati/farm_animals_game_phaser_js">github repo</a> and open index.html in your prefered browser.</p>',
			}
		}),	
	],

});

Project.projectList.sandwich_club = new Project({
	id:9,
	cardBackgroundColor:'grey',
	title: 'Sandwich Club',
	cardTitle: null,
	subtitle: '',
	cardSubtitle: null,
	github: 'https://github.com/tahahojati/SandwichClub',
	techs: ['Android'],
	tags: ['__techs__'],
	cardText: 'An Android app that shows you savory Sandwiches!',
	live: null,
	cardImage: requireImages('./sandwich_club/cardImage_sandwich_club.png'),
	slides:[
		new Project.Slide({
			layoutComponent: 'ModalViewImgLeft',
			title: 'Sandwich Club',
			data: {
				mode:'component',
				objectData: {
					// data must be an array image paths
					imagePaths: [
						requireImages('./sandwich_club/sandwich_club_list.png'),
						requireImages('./sandwich_club/sandwich_club_detail.png'),
					],
				},
				objectComponent: 'ModalViewImgImgSlideshow',
				contentHtml:'<h2 class="text-center">Sandwich Club</h2><p style="text-align:initial"><em>Sandwich Club</em> is an Android app that shows you savory Sandwiches! I wrote this app as part of my participation in Udacity\'s Android Developer Nanodegree. The app works by parsing a JSON file and downloading images from the internet.  You may find the code for this project as well instructions for running it on its <a href="https://github.com/tahahojati/SandwichClub/" target="_blank" title="Sandwich Club">Github page</a>.</p>',
			}
		}),			
	],

});

Project.projectList.ristorante = new Project({
	id:10,
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