angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $log, $http, Links) {

  $scope.data ={};

  $scope.getLinks= function() {
    Links.getLinks().then(function(data){
      $scope.data.links = data.data;
    });

  }

  $scope.getLinks();

});
