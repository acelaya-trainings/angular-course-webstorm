var app = angular.module('miApp', []);

app.directive('myDomDirective', function() {
    return {
		restrict: 'A',
        link: function($scope, element, attrs) {
            element.bind('click', function() {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function() {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function() {
                element.css('background-color', 'white');
            });
        }
    };
});