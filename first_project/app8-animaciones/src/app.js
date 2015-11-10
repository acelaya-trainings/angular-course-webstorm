var app = angular.module('app', []).

  // definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {

  $routes.
      when('/slides/:slideId', {
        templateUrl: 'src/views/slides-list.html',
        controller: SlidessListController
        }).
      when('/slides/', {
        templateUrl: 'src/views/slides-list.html',
        controller: SlidessListController
        }).
      //cualquier ruta no definida  
      otherwise({
      redirectTo: '/slides/'});

}]);


// Definimos animación enter
app.animation('animate-enter', ['$rootScope', function($rootScope) {
  return {
    setup : function(element) {

      // margin con respecto al tamaño de la ventana del navegador
      var margin = Math.max(100,($(window).width()-880)/2);

      // utilizamos rootScope para discernir qué animacion haremos
      var px = ($rootScope.myAnimation==='fade-right')?'-'+margin+'px':margin+'px';

      jQuery(element).css({ 'opacity': 0, 'margin-left': px });

    },
    start : function(element, done) {
      // lanzar animacion
      jQuery(element).animate({
        'opacity' : 1, 'margin-left': 0
      }, function() {
        // llamar a done() cuando la animación termina
        done();
      });
    }
  };
}]);

// Definimos animación hide
app.animation('animate-hide', ['$rootScope', function($rootScope) {
  return {
    setup : function(element) {

      jQuery(element).css({ 'opacity': 1 , 'margin-left': 0});

    },
    start : function(element, done) {

      // margin con respecto al tamaño de la ventana del navegador
      var margin = Math.max(100,($(window).width()-880)/2);

      // utilizamos rootScope para discernir qué animacion haremos
      var px = ($rootScope.myAnimation==='fade-right')?margin+'px':'-'+margin+'px';

      // lanzar animacion
      jQuery(element).animate({
        'opacity' : 0, 'margin-left': px
      }, function() {
        // llamar a done() cuando la animación termina
        done();
      });
    }
  };
}]);

