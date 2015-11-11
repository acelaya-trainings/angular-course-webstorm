var app = angular.module('myApp.model', []);

app.factory('User', function ($http) {
    return {
        get: function (id) {
            return $http.get('/user-data/' + id);
        }
    };
});