'use strict';

/**
 * @ngdoc function
 * @name marriageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marriageApp
 */
 
 
 
app.controller('MainCtrl', function($scope, $location, anchorSmoothScroll) {

   var self = this;
 
    self.images = [
        {thumb: 'images/thumbs/01.jpg', img: 'images/01.jpg', description: 'Image 1'},
        {thumb: 'images/thumbs/02.jpg', img: 'images/02.jpg', description: 'Image 2'},
        {thumb: 'images/thumbs/03.jpg', img: 'images/03.jpg', description: 'Image 3'},
        {thumb: 'images/thumbs/04.jpg', img: 'images/04.jpg', description: 'Image 4'},
		{thumb: 'images/thumbs/05.jpg', img: 'images/05.jpg', description: 'Image 1'},
        {thumb: 'images/thumbs/06.jpg', img: 'images/06.jpg', description: 'Image 2'},
        {thumb: 'images/thumbs/07.jpg', img: 'images/07.jpg', description: 'Image 3'},
        {thumb: 'images/thumbs/08.jpg', img: 'images/08.jpg', description: 'Image 4'},
		{thumb: 'images/thumbs/09.jpg', img: 'images/09.jpg', description: 'Image 1'},
        {thumb: 'images/thumbs/010.jpg', img: 'images/010.jpg', description: 'Image 2'},
        {thumb: 'images/thumbs/011.jpg', img: 'images/011.jpg', description: 'Image 3'},
        {thumb: 'images/thumbs/012.jpg', img: 'images/012.jpg', description: 'Image 4'}
    ];

    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');
 
      // call $anchorScroll()
      anchorSmoothScroll.scrollTo(eID);
      
    };
  });
  
  
