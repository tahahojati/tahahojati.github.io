angular.module('taha', ['ui.router', 'ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('portfolio', {
                url: '/portfolio',
                views: {
                    content: {
                        templateUrl: 'views/portfolio.html',
                        controller: 'PortfolioController',
                    }
                }
            })
            .state('bio', {
                url: '/bio',
                views: {
                    content: {
                        templateUrl: 'views/bio.html',
                        //controller:'PortfolioController',
                    }
                }
            })
            .state('project', {
                url: '/project/:id',
                views: {
                    content: {
                        templateUrl: 'views/project.html',
                        controller: 'ProjectController',
                    }
                }
            });

        $urlRouterProvider.otherwise('/portfolio');

    })

.controller('AppCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.activeNav = function(index){
        if(index === 1 && $state.is('bio')){
            return 'active';
        }
        else if (index === 0 && !$state.is('bio')) {
            return 'active';
        }
        else {return ''; }
    };
}])

.controller('PortfolioController', ['$scope', 'projectFactory', function($scope, projectFactory) {

    $scope.projects = projectFactory;
}])

//****************************************************************************/

.controller('ProjectController', ['$scope', 'projectFactory', '$stateParams', 'frameworkProvider', function($scope, projectFactory, $stateParams, frameworkProvider) {
    $scope.project = projectFactory[parseInt($stateParams.id, 10)];
    $scope.frameworks = [];

    for (i in $scope.project.frameworks) {
        $scope.frameworks.push(frameworkProvider[$scope.project.frameworks[i]]);
    }
    console.log($scope.frameworks);
}])

.factory('frameworkProvider', [function() {
    return {
        'node': {
            icon: 'img/nodejs-logo.png'
        },
        'mean': {
            icon: 'img/MEAN.png'
        },
        'd3': {
            icon: 'img/d3.png'
        },
        'angular': {
            icon: 'img/angular.png'
        },
        'javascript': {
            icon: 'img/javascript.png'
        },
        'zf': {
            icon: 'img/zf.png'
        },
        'ionic': {
            icon: 'img/ionic.png'
        },
		'android':{
			icon: 'img/android.jpg'
		},
        'cordova': {
            icon: 'img/cordova.png'
        },
        'bootstrap': {
            icon: 'img/bootstrap.png'
        },
        'css3': {
            icon: 'img/css3.svg'
        },
        'html5': {
            icon: 'img/html5.png'
        },
        'knockout': {
            icon: 'img/knockout.png',
        },
        'maps': {
            icon: 'img/maps.png'
        },
        'jquery': {
            icon: 'img/jquery.png'
        }
    };
}])

.factory('projectFactory', ['$sce', function($sce) {
    var fac = [{
        title: 'OPIHI: Our Project in Hawaii\'s Intertidal ',
        subtitle: 'Curriculum Research and Development Group - University of Hawaii',
        img: 'img/OPIHI-pre.png',
        bigimg: 'img/OPIHI.png 1041w, img/OPIHI-lg.png 1540w',
        // github: 'https://github.com/tahahojati/CRDG_OPIHI',
        live:'https://opihi.crdg.hawaii.edu',
        frameworks: ['zf', 'jquery', 'bootstrap', 'd3'],
        description: "OPIHI is a school-based monitoring program of Hawaii’s rocky intertidal where students improve their scientific skills while providing assistance gathering data in an area that has not been well studied in Hawaii. <br/> <br/> While taking part in OPIHI, students will learn about topics in marine ecology and conservation, species identification, and sampling techniques. Most importantly, students will build their confidence and interest in science. OPIHI provides opportunities for students to develop and investigate their own questions within the framework of monitoring biodiversity in the intertidal.",
        bodyRows: [{
            text: "<h2> Introduction </h2> <p> OPIHI is a school-based monitoring program of Hawaii’s rocky intertidal where students improve their scientific skills while providing assistance gathering data in an area that has not been well studied in Hawaii. <br/> <br/> While taking part in OPIHI, students learn about topics in marine ecology and conservation, species identification, and sampling techniques. Most importantly, students build their confidence and interest in science. OPIHI provides opportunities for students to develop and investigate their own questions within the framework of monitoring biodiversity in the intertidal. </p>" 
	    + "<p> I acted as the lead developer to design a website and database in order to facilitate data input for the students. The website was developed with php and Zend Framework.  It was designed to be flexible in options that it offers to the teachers, and the students while also enforcing common sense scientific rigors necessary for data collection and entry.</p>",
            imgs: '<img class="img-responsive" src="img/OPIHI3.png"> '
        }, {
            text: "<h2> The data collected in the project is publicly available.  You may visit the website to download the data or use its visual analytics tools to compare the state of intertidal to how it was in previous years.  If you have any feedback, please feel free to email me or the CRDG team :)",
            imgs: '<img class="img-responsive  body-row" src="img/OPIHI1.png"> <img class="img-responsive" src="img/OPIHI2.png">'
        }],

    }, {
        title: 'AASHTO LRFD Design Software',
        subtitle: 'Single page application',
        img: 'img/aashto-pre.png',
        bigimg: 'img/aashto.png 1041w, img/aashto-lg.png 1540w',
        // github: 'https://github.com/tahahojati/AASHTO',
        live: 'http://aashtobridgedesign.com/',
        frameworks: ['mean', 'node', 'bootstrap', 'angular'],
        description: "This website assists structural engineers in their Aashto LFRD bridge design through providing important calculations and saving them on cloud for later access. The calculations can be printed as pdf at any time.",
        bodyRows: [{
            text: "<h2>AASHTO LFRD Bridge Design </h2> <p>This website assists structural engineers in their Aashto LFRD bridge design through providing important calculations and saving them on cloud for later access.  The calculations can be converted to pdf documents and printed at users's request.</p>"
			+ "<p>I developed the website using node.js and MEAN stack framework. The backend was designed with SOA philosophy (Service Oriented Architecture) in mind, so that it can easily support mobile app clients or external api requests.  The front-end is developed as a single page application using Angular.js </p>",
            imgs: '<div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/aashto1.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/aashto2.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/aashto3.png" > </div>',
            layout: 2
        }],

    }, {
		title: 'Farm Akamai',
		subtitle: '(Second place winner of Hawaii Agricultural Hackathon (Agathon 2018))',
		img: 'img/farmsafe_proto1.png',
		github: 'https://github.com/tahahojati/FarmSafe_Agathon_2018_2',
		frameworks:['android'],
		description: "This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.",
		bodyRows:[{
			{
				text: "<p>This android app was designed for Agathon 2018.  I was the lead developer in a team of three three software engineers.  Together we were able to write an skeleton app in under 18 hours.  Our app was recognized as the second best project in the Hachathon earning us $2000 and a big sense of achievement.</p>" 
				+ "<p>The app is meant to address an essential issue in the Hawaii Farms.  Every year, a population of farmers and laborers immigrate to Hawaii.  These individuals frequently do not speak English and are not familiar to the American standards of farming.  Currently, there is no affordable way to educate these farmers.  Moreover, department of Agriculture does not have a dependable way to assure that a new farmer is familiar with regulations.  This can lead to food safety issues due to inadequate adherence to safety standards among other issues. </p>"
				+"<p>We chose to develop an application that can teach farmers about Agricultural methods and standards in a variety of languages. We chose the mobile platform over web/desktop as we understood that the app must be available to farmers in the field without any network connection.  Moreover, we wanted a simple design that is mostly self explanatory.  The pictures below show our prototype created using proto.io</p>",
				imgs: '<div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto1.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto2.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto3.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto4.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe_proto5.png" > </div>',
				layout: 2,
			},{
				text: "<p> We spent just under 16 consecutive hours implementing the app.  Unfortunately, the version that we presented at the Hackathon could not play videos or administer tests.  However, we are considering the possibility of continuing the project and presenting it to DOA as a solution to a common problem.  We are also aware that training in other languages is necessary in a variety of fields other than farming and plan to watch for other opportunities where this technology can be used to improve efficiency.</p>",
				imgs: '<div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe1.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe2.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe3.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe4.png" > </div> <div class="col-xs-12 col-sm-4  body-row" > <img class="img-responsive" src="img/farmsafe5.png" > </div>',
				layout: 2,
			} 
		]		
		
	}, { //<img\W*(class="[\w- ]*")([^>]*)>
        title: 'Ristorante con Fusion',
        img: 'img/ristorante-pre.png',
        bigimg: 'img/ristorante.png 1041w, img/ristorante-lg.png 1540w',
        github: 'https://github.com/tahahojati/conFusion-Angular',
        frameworks: ['cordova', 'ionic', 'angular'],
        description: "This project is a single page application for a fictitious restaurant, built using AngularJS.  I created this website by following coursera's online course on Angular. This website uses several features of Angular.js including two way databinding using controllers and models, use of ngResource for asynchronous data loading, and use of angular-ui-router for creating a single page application. <br/> I also created a hybrid mobile app for the restaurant the famous ionic platform.",
        bodyRows: [{
            text: "<h2> Introduction </h2> <p> This project is a single page application for a fictitious restaurant, built using AngularJS.  I created this website by following coursera's online course on Angular. This website uses several features of Angular.js including two way databinding using controllers and models, use of ngResource for asynchronous data loading, and use of angular-ui-router for creating a single page application. <br/> I also created a hybrid mobile app for the restaurant the famous ionic platform. You may find the code for the hybrid app on its <a href=\"https://github.com/tahahojati/conFusion-Ionic\"> own github page </a> </p> <h2> The Website </h2> <p> The website featuree: <ol> <li>A home page that shows the restaurant's latest promotion</li> <li> A menu page that allows guests to choose the food category they would like to explore by choosing a tab </li> <li> Singular item pages that allow the guests to submit their feedback using a form. The form is validated using Angular's form validation capabilities </li> </ol>  </p>",
            imgs: '<div class="col-xs-12 col-sm-6  body-row" > <img  src="img/ristorante1.png" > </div> <div class="col-xs-12 col-sm-6  body-row" > <img  src="img/ristorante2.png" > </div> <div class="col-xs-12 col-sm-6 col-sm-offset-3  body-row" > <img  src="img/ristorante3.png" > </div>',
            layout: 2
        }, {
            text: "<h2>The Mobile App </h2><p>The code for the app is available on its <a href=\"https://github.com/tahahojati/conFusion-Ionic\"> own github page </a>. The app design takes advantage of ionic's splash screen and side bar view for a native look.  Angular UI Router was used to set up the navigation</p>",
            imgs: '<div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-splsh.png"/ > </div> <div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-sidebar.png"/ > </div>'
        }, {
            text: "<p>Throughout the app resources are loaded dynamically via AJAX requests to a local server using the ngResource modul of angular. This includes the text and the images in the home page, the list of dishes in the menu page and the list of restaurant founders in the about page.</p>",
            imgs: '<div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-home.png"/ > </div> <div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-about.png"/ > </div>'
        }, {
            text: "<p>Ionic modals were used extensively in design of the login and register views as well as reservation capability of the app. Cordova's wrappers were used in the project to access native device functions such as taking a picture with camera or choosing a picture from gallery.</p>",
            imgs: '<div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-register.png"/ > </div> <div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-reserve.png"/ > </div>'
        }, {
            text: "<p>HTML5 local storage was used to persist data in JSON format between sessions of the app. Cordova wrappers were used to provide pop-up messages and notification messages in reacion to user's choices.</p>",
            imgs: '<div class="col-xs-12 col-sm-6 body-row" > <img class="img-responsive" src="img/ristorante-menu.png"/ > </div> <div class="col-xs-12 col-sm-6 body-row" > <img class="img-responsive" src="img/ristorante-menu2.png"/ > </div><div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-menu3.png"/ > </div> <div class="col-xs-12 col-sm-6" > <img class="img-responsive" src="img/ristorante-favorites.png"/ > </div>'
        }],

    }, {
        title: 'Coffee in Honolulu',
        img: 'img/coffee-pre.png',
        bigimg: 'img/coffee.png 1041w, img/coffee-lg.png 1540w',
        github: 'https://github.com/tahahojati/FEWP5A-Honolulu-Coffee',
        live: 'https://tahahojati.github.io/FEWP5A-Honolulu-Coffee/',
        docs: 'https://tahahojati.github.io/FEWP5A-Honolulu-Coffee/out/index.html',
        frameworks: ['knockout', 'javascript', 'maps', 'jquery'],
        description: "This project lists some of the best coffeeshops in Honolulu. The location of the shops is shown on an embedded map. The FourSquare rating for each location is also provided. This project takes advantage of KnockoutJS and jQuery's AJAX functions to get data from FourSquare.com via asynchronous requests.",
        bodyRows: [{
            text: "<h2>Introduction </h2> <p>This project lists some of the best coffeeshops in Honolulu. The location of the shops is shown on an embedded map. The FourSquare rating for each location is also provided. This project takes advantage of KnockoutJS and jQuery's AJAX functions to get data from FourSquare.com via asynchronous requests. <br/> This project makes extensive use of Gulp task runner specifically to run JSLint and to minimize the javascript and html files</p>",
            imgs: '<img class="img-responsive" src="img/coffee-pre.png"/>'
        }, {
            text: "<h2>Documentation </h2> <p>The javascript code in this project was fully documented using JSDoc. Compiled documentation of the project can be found <a href=\"https://tahahojati.github.io/FEWP5A-Honolulu-Coffee/out/index.html\"> here. </a></p>",
            imgs: '<img class="img-responsive" src="img/coffee-docs.png"/>'
        }],

    }, {
        title: 'Frogger',
        img: 'img/Frogger-pre.png',
        bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
        github: 'https://github.com/tahahojati/FEWP3-Frogger',
        live: 'https://tahahojati.github.io/FEWP3-Frogger/',
        frameworks: ['html5', 'javascript'],
        description: "This project is a replica of the arcade game frogger.",
        bodyRows: [{
            text: '<h2> Frogger </h2> <p>This project is a replica of the arcade game frogger. The game takes advantage of html5 canvas tag. The characters are animated using javascript\'s <code> requestAnimationFrame </code> function. The application is organized using classes and constructor functions; all operations are performed through objective method calls.</p>',
            imgs: $sce.trustAs('html', '<iframe style="min-width:400px; min-height:350px;" class="col-xs-12" src="https://www.youtube.com/embed/SxeHV1kt7iU" frameborder="0" allowfullscreen></iframe><figcaption><cite>Video by Adarsh Nair<cite></figcaption>')
        }],

    }, ];
    return fac;
}])



;
