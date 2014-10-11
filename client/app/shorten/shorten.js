angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function() {
    Links.addLinks($scope.link).then(function(data) {

      // Is this the right naming?
      // $scope.link = data.data;
    })
  };

});
