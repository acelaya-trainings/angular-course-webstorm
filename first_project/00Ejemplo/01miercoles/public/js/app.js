
var app = angular.module('myApp', []);

app.factory('User', function ($http) {
    return {
        get: function (id) {
            return $http.get('/user-data/' + id);
        }
    };
});

app.controller('MainController', function ($scope, User) {
    User.get(2).then(function (resp) {
        $scope.user = resp.data;
    }, function (resp) {
        console.log(resp.status)
    });
});
