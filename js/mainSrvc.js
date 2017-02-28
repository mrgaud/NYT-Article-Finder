angular.module('nytApp').service('mainSrvc',function($http){
    var url ='https://api.nytimes.com/svc/search/v2/articlesearch.json'
    var key = '&api-key=6838472b375b4bf2a7cd2cba8a7ced19'
    this.getArticles = function(term){
        return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+term+key)
    }
})
