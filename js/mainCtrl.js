angular.module('nytApp').controller('mainCtrl', function($scope, $state, mainSrvc) {
    var init = true;
    $scope.getArticles = function(term) {
        if (term === undefined) {
            return
        }
        mainSrvc.getArticles(term).then(function(response) {
            console.log(response.data.response.docs);
            $scope.articles = response.data.response.docs
            console.log(moment($scope.articles[0].pub_date).fromNow());
            $scope.articles.map(function(x) {
                x.pub_date = moment(x.pub_date).fromNow();
            })
            if (!init) {
                $state.go('results')
            }
        })
    }
    mainSrvc.initArticles().then(function(response) {
        console.log(response.data.results);
        $scope.popArts = response.data.results
    })
    $scope.getArticles("fish")
})
