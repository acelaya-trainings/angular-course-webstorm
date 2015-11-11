angular.module("app", [ 'pascalprecht.translate' ]).config(
		function($routeProvider, $locationProvider) {
			$locationProvider.hashPrefix('!');
			$routeProvider.when("/product", {
				templateUrl : "inicio.html",
				controller : "ProductController"
			}).when("/detalle", {
				templateUrl : "detalle.html",
				controller : "ProductController"
			}).otherwise({
				redirectTo : "/product"
			});
		}).config(function($translateProvider) {
	$translateProvider.translations('en', {
		NOMBRE : 'Name',
		CANTIDAD : 'Quantity',
		PRECIO : 'Price',
		DISPONIBLE : 'Available',
		DETALLE: "Detail"

	});
	$translateProvider.translations('es', {
		NOMBRE : 'Nombre',
		CANTIDAD : 'Cantidad',
		PRECIO : 'Precio',
		DISPONIBLE : 'Disponible',
		DETALLE: "Detalle"

	});

	$translateProvider.preferredLanguage('es');

}).directive('detalledirectiva', function() {
	return {
		restrict : 'E',
		templateUrl : 'midirectiva.html'
	};
}).factory("factoria", function() {

	var producto = {
		'id' : 1,
		'nombre' : "Fregona",
		'cantidad' : 23,
		'precio' : 1,
		'disponible' : true
	}

	return {
		get : function() {
			return producto;
		}
	};
}).controller("ProductController",
		function($scope, factoria, $translate, $location) {
			$scope.idiomas = [ "es", "en" ];
			$scope.idioma = {
				nombre : 'es'
			};
			$scope.producto = factoria.get();
			$scope.changeLanguage = function() {
				$translate.use($scope.idioma.nombre);
				$location.path("detalle");
			};
		});