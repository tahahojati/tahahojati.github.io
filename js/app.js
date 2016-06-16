angular.module('taha', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('portfolio', {
                url: '/',
                views: {
                    content: {
                        templateUrl: 'views/portfolio.html',
                        controller: 'PortfolioController',
                    }
                }
            })
            .state('bio', {
                url: 'bio',
                views: {
                    content: {
                        templateUrl: 'views/bio.html',
                        //controller:'PortfolioController',
                    }
                }
            })
            .state('contact', {
                url: 'contact',
                views: {
                    content: {
                        templateUrl: 'views/contact.html',
                        //controller:'PortfolioController',
                    }
                }
            })
            .state('project', {
                url: 'project/:id',
                views: {
                    content: {
                        templateUrl: 'views/project.html',
                        controller: 'ProjectController',
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

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

.factory('projectFactory',[function(){
    var fac = [{
            id: 1,
            title: 'Frogger',
            description: "Lorem ipsum dolor sit amet, paulo admodum an sit, denique noluisse vim ne. Vix cu vocent regione insolens. Sed te purto debitis molestiae. Ut quod dico alienum nam, odio iudico oportere eu vis. Sea aliquam maluisset hendrerit et, sea eu expetendis efficiendi<br/> nstructior, semper dictas mei ad. Aliquid appellantur qui ea, eum posse invidunt necessitatibus at, accusam apeirian per in. Vel et velit interpretaris. Sit ut porro melius habemus, consetetur dissentias vel cu. Iisque<br/>  integre lucilius pro no,an dico veritus est. Brute recusabo mea ei, quo sint constituam deterruisset te, velit ubique ei mea. Cum eu inani copiosae aliquando.Cum an vide graece utamur, his et dico equidem vulputate. Exercinoster ea vix. Ad amet dicunt vix, modus oblique in duo. Sonet docendi inmea, pro ei omnis cetero copiosae. Pri et maiorum democritum disputando, augue nihil at ius. Te vis modo adipisci urbanitas, cudicam alienum mediocritatem<br/>    nec, mea an laoreet tincidunt. Cum ea recteque periculis assentior, veri liber cu pri, eum solumdisputando et. His invidunt assueverit ad, enim movet voluptatibus ei est, cu rebum incorrupte mei. Sit quas minim labore            id.",
            img: 'img/Frogger.png',

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
.controller('PortfolioController', ['$scope', 'projectFactory', function($scope ,projectFactory) {

    $scope.projects = projectFactory;
}])




;
