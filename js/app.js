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
            icon: 'bootstrap.png'
        }
    };
}])

.factory('projectFactory',[function(){
    var fac = [
        {
            id: 0,
            title: 'OPIHI: Our Project in Hawaii\'s Intertidal ',
            subtitle:'Under active development',
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
            description: "Lorem  deterruisset te, velit.",
            bodyRows:[{text:'Lorem ipsum ', imgs: 'hello'}],

        },
        {
            id: 1,
            title: 'AASHTO LRFD Design Software',
            subtitle:'Under active development',
            img: 'img/Frogger-pre.png',
            bigimg: 'img/Frogger.png 1041w, img/Frogger-lg.png 1540w',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
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
