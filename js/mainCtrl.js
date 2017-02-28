angular.module('nytApp').controller('mainCtrl',function($scope, mainSrvc){
    $scope.getArticles = function(term){
        if(term === undefined){
            return
        }
        mainSrvc.getArticles(term).then(function(response){
            console.log(response.data.response.docs);
            $scope.articles = response.data.response.docs
        })
    }
    mainSrvc.initArticles().then(function(response){
        console.log(response.data.results);
        $scope.popArts = response.data.results
    })
    $scope.getArticles("fish")
})
