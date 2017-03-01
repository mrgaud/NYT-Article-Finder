angular.module('nytApp').service('mainSrvc', function($http) {
    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    var key = '&api-key=6838472b375b4bf2a7cd2cba8a7ced19'
    this.getArticles = function(term, from, to) {
        if (!from && !to) {
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term +"&sort=newest"+ key)
        }
        if (from && !to) {
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + from +"&sort=newest"+ key)
        }
        if (!from && to) {
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + to +"&sort=newest"+ key)
        }
        if (from && to) {
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + from +"&sort=newest"+ to + key)
        }









    }
    this.initArticles = function() {
        return $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=6838472b375b4bf2a7cd2cba8a7ced19')
    }
})
