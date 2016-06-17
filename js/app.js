angular.module('taha', ['ui.router'])
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

.controller('ProjectController', ['$scope', 'projectFactory', '$stateParams', 'frameworkProvider', function($scope, projectFactory, $stateParams, frameworkProvider){
    $scope.project = projectFactory[parseInt($stateParams.id,10)];
    $scope.frameworks = [];
    for(var i in $scope.projects){
        $scope.frameworks.push(frameworkProvider['i']);
    }
}])

.factory('frameworkProvider',[function(){
    return {
        'angular': {
            icon:'sddfd'
        }
    };
}])

.factory('projectFactory',[function(){
    var fac = [{
            id: 1,
            title: 'Frogger',
            img: 'img/Frogger.png',
            bigimg: 'img/Frogger.png',
            github: 'https://github.com/tahahojati/FEWP3-Frogger',
            live: 'https://tahahojati.github.io/FEWP3-Frogger/',
            frameworks: ['angular', 'javascript'],
            imgs: ['img/Frogger.png', 'img/Frogger.png'],
            description: "Lorem ipsum dolor sit amet, paulo admodum an sit, denique noluisse vim ne. Vix cu vocent regione insolens. Sed te purto debitis molestiae. Ut quod dico alienum nam, odio iudico oportere eu vis. Sea aliquam maluisset hendrerit et, sea eu expetendis efficiendi<br/> nstructior, semper dictas mei ad. Aliquid appellantur qui ea, eum posse invidunt necessitatibus at, accusam apeirian per in. Vel et velit interpretaris. Sit ut porro melius habemus, consetetur dissentias vel cu. Iisque<br/>  integre lucilius pro no,an dico veritus est. Brute recusabo mea ei, quo sint constituam deterruisset te, velit.",
            body:'Lorem ipsum dolor sit amet, paulo admodum an sit, denique noluisse vim ne. Vix cu vocent regione insolens. Sed te purto debitis molestiae. Ut quod dico alienum nam, odio iudico oportere eu vis. Sea aliquam maluisset hendrerit et, sea eu expetendis efficiendi<br/> nstructior, semper dictas mei ad. Aliquid appellantur qui ea, eum posse invidunt necessitatibus at, accusam apeirian per in. Vel et velit interpretaris. Sit ut porro melius habemus, consetetur dissentias vel cu. Iisque<br/>  integre lucilius pro no,an dico veritus est. Brute recusabo mea ei, quo sint constituam deterruisset te, velit ubique ei mea. Cum eu inani copiosae aliquando.Cum an vide graece utamur, his et dico equidem vulputate. Exercinoster ea vix. Ad amet dicunt vix, modus oblique in duo. Sonet docendi inmea, pro ei omnis cetero copiosae. Pri et maiorum democritum disputando, augue nihil at ius. Te vis modo adipisci urbanitas, cudicam alienum mediocritatem<br/>    nec, mea an laoreet tincidunt. Cum ea recteque periculis assentior, veri liber cu pri, eum solumdisputando et. His invidunt assueverit ad, enim movet voluptatibus ei est, cu rebum incorrupte mei. Sit quas minim labore',

        },
        {
                id: 1,
                title: 'Frogger',
                description: "Lorem ipsum dolor sit amet, paulo admodum an sit, denique noluisse vim ne. Vix cu vocent regione insolens. Sed te purto debitis molestiae. Ut quod dico alienum nam, odio iudico oportere eu vis. Sea aliquam maluisset hendrerit et, sea eu expetendis efficiendi<br/> nstructior, semper dictas mei ad. Aliquid appellantur qui ea, eum posse invidunt necessitatibus at, accusam apeirian per in. Vel et velit interpretaris. Sit ut porro melius habemus, consetetur dissentias vel cu. Iisque<br/>  integre lucilius pro no,an dico veritus est. Brute recusabo mea ei, quo sint constituam deterruisset te, velit ubique ei mea. Cum eu inani copiosae aliquando.Cum an vide graece utamur, his et dico equidem vulputate. Exercinoster ea vix. Ad amet dicunt vix, modus oblique in duo. Sonet docendi inmea, pro ei omnis cetero copiosae. Pri et maiorum democritum disputando, augue nihil at ius. Te vis modo adipisci urbanitas, cudicam alienum mediocritatem<br/>    nec, mea an laoreet tincidunt. Cum ea recteque periculis assentior, veri liber cu pri, eum solumdisputando et. His invidunt assueverit ad, enim movet voluptatibus ei est, cu rebum incorrupte mei. Sit quas minim labore            id.",
                img: 'img/Frogger.png',

            },

    ];
    return fac;
}] )



;
