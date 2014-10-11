angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $log, $http, Links) {
  // Your code here
  console.log('fooBot');

  $scope.data ={};

  $scope.getLinks= function() {
    // do something
    console.log('Inside getLinks');
    Links.getLinks().then(function(data){
      console.log(data);
      $scope.data.links = data.data;
      // return data;
    });

  }

  $scope.getLinks();

});
