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

    $urlRouterProvider.otherwise('/')
})
