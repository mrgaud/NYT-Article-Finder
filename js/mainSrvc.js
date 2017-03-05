angular.module('nytApp').service('mainSrvc', function($http) {
    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    var key = '&api-key=6838472b375b4bf2a7cd2cba8a7ced19'
    this.getArticles = function(term, from, to) {
        if (from && to) {
            console.log('from & to');
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + from + to + key)
        }
        if (!from && !to) {
            console.log("neither from or to");
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + key)
        }
        if (from && !to) {
            console.log('only From');
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + from + key)
        }
        if (!from && to) {
            console.log('only to');
            return $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + term + to + key)
        }
    }

    this.initArticles = function() {
        return $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=6838472b375b4bf2a7cd2cba8a7ced19')
    }


    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log(position)
    //     var posInt = setInterval(function(){
    //         if(position){
    //             this.lat = position.coords.latitude
    //             this.lon = position.coords.longitude
    //
    //             clearInterval(posInt)
    //             console.log(this.lat,' ',this.lon);
    //         }
    //     },1000)
    // })
})
