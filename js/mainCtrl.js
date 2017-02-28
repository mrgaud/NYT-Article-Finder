angular.module('nytApp').controller('mainCtrl',function($scope, mainSrvc){
    $scope.getArticles = function(term){
        mainSrvc.getArticles(term).then(function(response){
            console.log(response.data.response.docs);
            $scope.articles = response.data.response.docs
            $scope.search = ''
        })
    }
})
