angular.module('taha', ['ui.router','ngSanitize'])
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
            .state('contact', {
                url: '/contact',
                views: {
                    content: {
                        templateUrl: 'views/contact.html',
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
    .filter('evensFilter', function() {
        return function(array) {
            var out = [];
            for (var i = 0; i < array.length; i = i + 2) {
                out.push(i);
            }
            return out;
        };
    })

.controller('PortfolioController', ['$scope', 'projectFactory', function($scope ,projectFactory) {

    $scope.projects = projectFactory;
}])

//****************************************************************************/

.controller('ProjectController', ['$scope', 'projectFactory', '$stateParams', 'frameworkProvider', function($scope, projectFactory, $stateParams, frameworkProvider){
    $scope.project = projectFactory[parseInt($stateParams.id,10)];
    $scope.frameworks = [];

    for(i of $scope.project.frameworks){
        $scope.frameworks.push(frameworkProvider[i]);
    }
    console.log($scope.frameworks);
}])

.factory('frameworkProvider',[function(){
    return {
        'angular': {
            icon:'img/angular.png'
        },
        'javascript': {
            icon: 'img/javascript.png'
        },
        'zf' : {
            icon:'img/zf.png'
        },
        'ionic': {
            icon:'img/ionic.png'
        },
        'cordova':{
            icon: 'img/cordova.png'
        },
        'bootstrap':{
            icon: 'img/bootstrap.png'
        },
        'css3':{
            icon: 'img/css3.svg'
        },
        'html5':{
            icon: 'img/html5.png'
        }
    };
}])

.factory('projectFactory',[function(){
    var fac = [
        {
            id: 0,
            title: 'OPIHI: Our Project in Hawaii\'s Intertidal ',
            subtitle:'Under active development',
            img: 'img/OPIHI-pre.png',
            bigimg: 'img/OPIHI.png 1041w, img/OPIHI-lg.png 1540w',
            github: 'https://github.com/tahahojati/CRDG_OPIHI',
            frameworks: ['zf', 'angular', 'bootstrap'],
            description: "OPIHI is a school-based monitoring program of Hawaii’s rocky intertidal where students improve their scientific skills while providing assistance gathering data in an area that has not been well studied in Hawaii. <br/> <br/> While taking part in OPIHI, students will learn about topics in marine ecology and conservation, species identification, and sampling techniques. Most importantly, students will build their confidence and interest in science. OPIHI provides opportunities for students to develop and investigate their own questions within the framework of monitoring biodiversity in the intertidal. We hope this place-based learning connects students to their local environments and natural resources and encourages wise stewardship ...",
            bodyRows:[{text:"<h2> Introduction </h2> <p> OPIHI is a school-based monitoring program of Hawaii’s rocky intertidal where students improve their scientific skills while providing assistance gathering data in an area that has not been well studied in Hawaii. <br/> <br/> While taking part in OPIHI, students will learn about topics in marine ecology and conservation, species identification, and sampling techniques. Most importantly, students will build their confidence and interest in science. OPIHI provides opportunities for students to develop and investigate their own questions within the framework of monitoring biodiversity in the intertidal. We hope this place-based learning connects students to their local environments and natural resources and encourages wise stewardship. <p> <p> I was hired by CRDG to design a website in order to facilitate data input for the students.  The website will also serve as a front-end for general public to view the studies's results and summary graphs. The website is being developed using Zend Framework for backend; while its front end takes advange of Bootstrap and AngularJS for displaying the content.</p>", imgs: '<img class="img-responsive" src="img/OPIHI3.png"> '},
        {text:"<h2> Current State </h2> <p> This project is under active development.  Currently, the website has a complete user model but only a partial model for field studies.  The project's development was halted for more than a month, but I have recently restarted its develpment.  The expected finish date for this project is end of August. I am also interested in creating a hybrid mobile app for the project afterwards. At this time, I cannot provide a live preview for this project, but this will change as development progresses.</p>", imgs: '<img class="img-responsive  body-row" src="img/OPIHI1.png"> <img class="img-responsive" src="img/OPIHI2.png">'}],

        },
        {
            id: 1,
            title: 'AASHTO LRFD Design Software',
            subtitle:'Under active development',
            img: 'img/aashto-pre.png',
            bigimg: 'img/aashto.png 1041w, img/aashto-lg.png 1540w',
            github: 'https://github.com/tahahojati/AASHTO',
            live: 'http://test2.lowerealtyhawaii.com',
            frameworks: ['zf', 'angular', 'bootstrap'],
            description: "This website is being designed to assist structural engineers in their Aashto LFRD bridge design through providing important calculations and saving them on cloud for later access.  The project is still in its infancy as I only started it one week ago.  The expected release date for the project is end of August.",
            bodyRows:[{text:"<h2>AASHTO LFRD Bridge Design </h2> <p>This website is being designed to assist structural engineers in their Aashto LFRD bridge design through providing important calculations and saving them on cloud for later access.  The project is still in its infancy as I only started it one week ago.  The expected release date for the project is end of August.</p>", imgs: '<img class="col-xs-12 col-sm-4  body-row" src="img/aashto1.png"> <img class="col-xs-12 col-sm-4  body-row" src="img/aashto2.png"> <img class="col-xs-12 col-sm-4  body-row" src="img/aashto3.png">', layout:2}],

        },
        {
            id: 2,
            title: 'Ristorante con Fusion',
            img: 'img/ristorante-pre.png',
            bigimg: 'img/ristorante.png 1041w, img/ristorante-lg.png 1540w',
            github: 'https://github.com/tahahojati/conFusion-Angular',
            frameworks: ['cordova', 'ionic', 'angular'],
            description: "This project is a single page application for a fictitious restaurant, built using AngularJS.  I created this website by following coursera's online course on Angular. This website uses several features of Angular.js including two way databinding using controllers and models, use of ngResource for asynchronous data loading, and use of angular-ui-router for creating a single page application. <br/> I also created a hybrid mobile app for the restaurant the famous ionic platform.",
            bodyRows:[{text:"<h2> Introduction </h2> <p> This project is a single page application for a fictitious restaurant, built using AngularJS.  I created this website by following coursera's online course on Angular. This website uses several features of Angular.js including two way databinding using controllers and models, use of ngResource for asynchronous data loading, and use of angular-ui-router for creating a single page application. <br/> I also created a hybrid mobile app for the restaurant the famous ionic platform. You may find the code for the hybrid app on its <a href=\"https://github.com/tahahojati/conFusion-Ionic\"> own github page </a> </p> <h2> The Website </h2> <p> The website featuree: <ol> <li>A home page that shows the restaurant's latest promotion</li> <li> A menu page that allows guests to choose the food category they would like to explore by choosing a tab </li> <li> Singular item pages that allow the guests to submit their feedback using a form. The form is validated using Angular's form validation capabilities </li> </ol>  </p>", imgs: '<img class="col-xs-12 col-sm-6  body-row" src="img/ristorante1.png"> <img class="col-xs-12 col-sm-6  body-row" src="img/ristorante2.png"> <img class="col-xs-12 col-sm-6 col-sm-offset-3  body-row" src="img/ristorante3.png">', layout:2},
        {
            text:"<h2>The Mobile App </h2><p>The code for the app is available on its <a href=\"https://github.com/tahahojati/conFusion-Ionic\"> own github page </a>. The app design takes advantage of ionic's splash screen and side bar view for a native look.  Angular UI Router was used to set up the navigation</p>",
            imgs: '<img class="col-xs-12 col-sm-6" src="img/ristorante-splsh.png"/> <img class="col-xs-12 col-sm-6" src="img/ristorante-sidebar.png"/>'
        }, {
            text:"<p>Throughout the app resources are loaded dynamically via AJAX requests to a local server using the ngResource modul of angular. This includes the text and the images in the home page, the list of dishes in the menu page and the list of restaurant founders in the about page.</p>",
            imgs: '<img class="col-xs-12 col-sm-6" src="img/ristorante-home.png"/> <img class="col-xs-12 col-sm-6" src="img/ristorante-about.png"/>'
        },
        {
            text:"<p>Ionic modals were used extensively in design of the login and register views as well as reservation capability of the app. Cordova's wrappers were used in the project to access native device functions such as taking a picture with camera or choosing a picture from gallery.</p>",
            imgs: '<img class="col-xs-12 col-sm-6" src="img/ristorante-register.png"/> <img class="col-xs-12 col-sm-6" src="img/ristorante-reserve.png"/>'
        },
        {
            text:"<p>HTML5 local storage was used to persist data in JSON format between sessions of the app. Cordova wrappers were used to provide pop-up messages and notification messages in reacion to user's choices.</p>",
            imgs: '<img class="col-xs-12 col-sm-6 body-row" src="img/ristorante-menu.png"/> <img class="col-xs-12 col-sm-6 body-row" src="img/ristorante-menu2.png"/><img class="col-xs-12 col-sm-6" src="img/ristorante-menu3.png"/> <img class="col-xs-12 col-sm-6" src="img/ristorante-favorites.png"/>'
        }],

        },
        {
            id: 3,
            title: 'Coffee in Honolulu',
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
            description: "Lorem  deterruisset te, velit.",
            bodyRows:[{text:'Lorem ipsum ', imgs: 'hello'}],

        },
        {
            id: 4,
            title: 'Frogger',
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
            description: "Lorem  deterruisset te, velit.",
            bodyRows:[{text:'Lorem ipsum ', imgs: 'hello'}],

        },
    ];
    return fac;
}] )



;
