
app.factory('SlidesModel', function () {

  var SlidesModel = {
    slidesList: [
    {
      "id": "1",
      "title": "Portada",
      "content": "Mi portada"
    },
    {
      "id": "2",
      "title": "First Slide",
      "content": "###Markdown Content here :)\n\n\n###Item List:\n\n - one\n\n - two\n\n - three"
    }
  ]
  };

  /**
   * generate new object slide an push to list
   * @returns {int} id of generated slide
   */
  SlidesModel.addSlide = function() {

    var newId = SlidesModel.slidesList.length+1;
    SlidesModel.slidesList.push({"id":newId,"title":"New slide #"+newId,"content":"*Dinamically* generated slide :)"});
    return newId;
  };

  SlidesModel.getSlides = function() {
    return SlidesModel.slidesList;
  };

  /**
   * returns slide at position 'index', or first slide in array
   * @param  {int} index
   * @return {[type]}    [description]
   */
  SlidesModel.getSlide = function(index) {

    if((index>0)&&(index<=SlidesModel.slidesList.length))
      return SlidesModel.slidesList[index-1];
    else
      return SlidesModel.slidesList[0];
  };

  return SlidesModel;
});
