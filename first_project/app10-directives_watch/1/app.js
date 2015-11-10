var app = angular.module('wonderbits', []);

app.controller('MainCtrl', function($scope) {
  $scope.value = Math.round( (Math.random() * 10));
  // Creamos una función que se lanzará asíncronamente cada 3 segundos.
  setInterval(function () {
    $scope.value = Math.round( (Math.random() * 10));
    // El método $apply sirve para notificar de cambios realizados
    //  asíncronamente a interacciones con la UI.
    $scope.$apply();
  }, 3000);
  
});

app.directive('counter', function () {
  return {
      restrict: 'E', // (E => Tag, A => attribute, C => Class, M => Comment)
      controller: function($scope, $element) {
        // Este método llamará al callBack que le pasamos cuando cambie el valor de value.
        $scope.$watch('value', function(oldValue, newValue) {
          if (oldValue < newValue) {
            $element.removeClass('green');
            $element.addClass('red');
          } else if (oldValue > newValue ){
            $element.removeClass('red');
            $element.addClass('green');
          } else {
            $element.removeClass('green');
            $element.removeClass('red');
          }
          
        });
      },
      template:
        '<span>{{value}}</span>',
      replace: true
    };
});