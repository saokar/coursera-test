(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://infinite-savannah-29846.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
