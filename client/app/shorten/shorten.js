angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.go = function(path) {
    $location.path(path);
  }

  $scope.addLink = function() {
    Links.addLinks($scope.link).then(function(data) {
      $scope.go('links');

      // Is this the right naming?
      // $scope.link = data.data;
    })
  };

});
