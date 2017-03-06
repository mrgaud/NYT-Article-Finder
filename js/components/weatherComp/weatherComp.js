angular.module('nytApp').component('weatherComp', {
    templateUrl: 'js/components/weatherComp/weatherComp.html',
    controller: function($scope,$http) {
        var key = '95ce7b7a18776b5cbbb00febdbbd049e';

        var getWeatherData=function(lat,lon){
            $http({
                method:"GET",
                url:`https://api.wunderground.com/api/912edc7c39a1d423/conditions/q/${lat},${lon}.json`,
            }).then(function(response){
                $scope.weatherData=response.data.current_observation
                console.log($scope.weatherData);
            }, function(response){
                console.log(response);
            })
        }

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;
            var lon = crd.longitude
            var lat = crd.latitude
            console.log(lat, lon);
            getWeatherData(lat, lon);
        };

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);


    }
})
