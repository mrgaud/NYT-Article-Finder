angular.module('nytApp').service('mainSrvc', function($http) {
    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    var key = '&api-key=6838472b375b4bf2a7cd2cba8a7ced19'
    this.getArticles = function(term) {
        return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + key)
    }
    this.initArticles = function(){
        return $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=6838472b375b4bf2a7cd2cba8a7ced19')
    }
})
