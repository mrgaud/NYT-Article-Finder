"use strict";angular.module("nytApp",["ui.router"]).config(function(t,e){t.state("home",{url:"/",templateUrl:"views/homeTmpl.html"}).state("results",{url:"/results",templateUrl:"views/resultTmpl.html"}).state("about",{url:"/about",templateUrl:"views/aboutTmpl.html"}).state("res",{url:"/res",templateUrl:"views/resources.html"}),e.otherwise("/")}),angular.module("nytApp").controller("mainCtrl",function(t,e,o){var n=!1;t.getArticles=function(s,a,l){void 0!==s&&(a?a="&begin_date="+a+"0101":(console.log(a),a=!1),l?(console.log(l),l="&end_date="+l+"0101"):(console.log(l),l=!1),console.log(arguments),o.getArticles(s,a,l).then(function(o){console.log(o.data.response.docs),t.articles=o.data.response.docs,t.articles.sort(function(t,e){return t.pub_date<e.pub_date}),t.articles.map(function(t){t.pub_date=moment(t.pub_date).fromNow()}),n?e.go("results"):n=!0}))},o.initArticles().then(function(e){t.popArts=e.data.results,console.log(t.popArts),setTimeout(function(){$(".tooltipped").tooltip({delay:50})},100)}),t.getArticles("fish")}),angular.module("nytApp").service("mainSrvc",function(t){var e="&api-key=6838472b375b4bf2a7cd2cba8a7ced19";this.getArticles=function(o,n,s){return n&&s?(console.log("from & to"),t.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+o+n+s+e)):n||s?n&&!s?(console.log("only From"),t.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+o+n+e)):!n&&s?(console.log("only to"),t.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+o+s+e)):void 0:(console.log("neither from or to"),t.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+o+e))},this.initArticles=function(){return t.get("https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=6838472b375b4bf2a7cd2cba8a7ced19")}}),$(document).ready(function(){$(".datepicker").pickadate({selectMonths:!0,selectYears:100,max:new Date}),$(".button-collapse").sideNav(),$(".carousel").carousel()}),$(document).ready(function(){}),angular.module("nytApp").component("footerComp",{templateUrl:"js/components/footerComponent/footerComponent.html"}),angular.module("nytApp").component("navComponent",{templateUrl:"js/components/navComponent/navComponent.html",bindings:{getArticles:"&"}}),angular.module("nytApp").component("popArticle",{templateUrl:"js/components/popArtComp/popArtComp.html",bindings:{popArts:"="}}),angular.module("nytApp").component("weatherComp",{templateUrl:"js/components/weatherComp/weatherComp.html",controller:function(t,e){function o(t){var e=t.coords,o=e.longitude,n=e.latitude;console.log(n,o),s(n,o)}function n(t){console.warn("ERROR("+t.code+"): "+t.message)}var s=function(o,n){e({method:"GET",url:"https://api.wunderground.com/api/912edc7c39a1d423/conditions/q/"+o+","+n+".json"}).then(function(e){t.weatherData=e.data.current_observation,console.log(t.weatherData)},function(t){console.log(t)})},a={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};navigator.geolocation.getCurrentPosition(o,n,a)}});