var app = angular.module('myApp.controller', []);

app.controller('MainController', function ($scope, User) {

    $scope.getUser = function (){
        User.get($scope.newUserId).then(function (resp) {
            $scope.user = resp.data;
        }, function (resp) {
            console.log(resp.status)
        });
    };

    $scope.newUserId = 1;
    $scope.getUser();
});
