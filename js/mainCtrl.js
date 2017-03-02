angular.module('nytApp').controller('mainCtrl', function($scope, $state, mainSrvc) {
    var init = false;
    $scope.getArticles = function(term,from,to) {
        if (term === undefined) {
            return
        }
        if(!from){
            console.log(from);
            from = false
        }else {
            from = '&begin_date='+from+'0101'
        }
        if(!to){
            console.log(to);
            to = false
        }else{
            console.log(to);
            to = '&end_date='+to+'1230'
        }
        console.log(arguments);
        mainSrvc.getArticles(term, from, to).then(function(response) {
            console.log(response.data.response.docs);
            $scope.articles = response.data.response.docs
            $scope.articles.sort(function(a,b){
                return a.pub_date<b.pub_date
            })
            $scope.articles.map(function(x) {
                x.pub_date = moment(x.pub_date).fromNow();
            })

            if (init) {
                $state.go('results')
            }else{
                init = true;
            }
        })
    }
    mainSrvc.initArticles().then(function(response) {
        $scope.popArts = response.data.results
    })
    $scope.getArticles("fish")


    // $scope.checkInput()
})
