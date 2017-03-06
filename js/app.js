angular.module('nytApp',['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'views/homeTmpl.html'
    })
    .state('results',{
        url:'/results',
        templateUrl:'views/resultTmpl.html'
    })
    .state('about',{
        url:'/about',
        templateUrl:'views/aboutTmpl.html'
    })
    .state('res',{
        url:'/res',
        templateUrl:'views/resources.html'
    })

    $urlRouterProvider.otherwise('/')
})
