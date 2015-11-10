function SlidessListController($scope, SlidesModel, $routeParams, $location, $timeout, $rootScope) {

  // id=1 por defecto
  $scope.id = $routeParams.slideId || 1;
  $scope.slides = SlidesModel.getSlides();

  if($scope.id >$scope.slides.length)
    $location.path('/slides/1');

  $scope.slide =  SlidesModel.getSlide($scope.id);

  $scope.slideTo = $scope.slide;

  $scope.prettyContent = "";

  $scope.hide=false;

  // watch de más de una variable via stackoverflow:
  // http://stackoverflow.com/questions/11952579/watch-multiple-scope-attributes-in-angularjs 
  $scope.$watch('[slide.title, slide.content]', function(newValue, oldValue) {

    // creamos contenido de la slide contatenándo título y content
    var markdownContent = '#'+$scope.slide.title+'\n\n\n'+$scope.slide.content;

    // convertir a html
    var showdown = new Showdown.converter();
    $scope.prettyContent = showdown.makeHtml(markdownContent);
  }, true);

  $scope.gotoLast = function() {
    $scope.gotoSlide($scope.slides.length);
  };

  $scope.gotoFirst = function() {
    $scope.gotoSlide(1);
  };

  $scope.gotoNext = function() {
    $scope.gotoSlide(parseInt($scope.slide.id,10)+1);
  };

  $scope.gotoPrev = function() {
    $scope.gotoSlide($scope.slide.id-1);
  };

  $scope.gotoSlide = function(pId) {

    var id = pId || $scope.slideTo.id;

    if(id!=$scope.slide.id)
    {
      animateSwitchSlide(id);
    }
  };

  $scope.newSlide = function() {

    var id = SlidesModel.addSlide();
    animateSwitchSlide(id);
  };

  animateSwitchSlide = function (id) {

    // utilizamos rootScope para discernir qué animacion haremos
    $rootScope.myAnimation = (id > $scope.slide.id)?'fade-left':'fade-right';

    $scope.hide=true;

    // transition tras timeout para dar timepo a la animación hide a finalizar
    $timeout( function(){ $location.path('/slides/'+id); }, 550 );
  };

}