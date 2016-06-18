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
            icon: 'img/cordiva.png'
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
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['css3', 'javascript'],
            description: "Lorem  deterruisset te, velit.",
            bodyRows:[{text:'Lorem ipsum ', imgs: 'hello'}],

        },
        {
            id: 2,
            title: 'Ristorante con Fusion',
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
            description: "Lorem  deterruisset te, velit.",
            bodyRows:[{text:'Lorem ipsum ', imgs: 'hello'}],

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
