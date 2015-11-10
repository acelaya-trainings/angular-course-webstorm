var myApp = angular.module('app', []);
myApp.factory('testInterceptor', function () {
      return {
        request: function(config) {
          return config;
        },

        requestError: function(config) {
          return config;
        },

        response: function(res) {
          return res;
        },

        responseError: function(res) {
          return res;
        }
      }
    })
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('testInterceptor');
    })
    .run(function($http) {
      $http.get('https://test-routes.herokuapp.com/test/hello')
        .then(function(res) {
          console.log(res.data.message)
        })
    });