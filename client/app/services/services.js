angular.module('shortly.services', [])

.factory('Links', function ($http) {

  var getLinks = function() {
    console.log('In the getLinks method of factory');
    return $http.get('/api/links').
    success(function(data, status, headers, config) {
      console.log(data);
      return data;
    }).
    error(function(data, status, headers, config) {
      console.log('Error: ',data);
    });
  }

  var addLinks = function(obj) {
    console.log('In the addLinks method of the factory');
    // Need to do something to shorten an incoming link

    return $http.post('/api/links', obj).
    success(function(data, status, headers, config) {
      console.log(data);
      return data;
    }).
    error(function(data, status, headers, config) {
      console.log('Error: ',data);
    });
  }


  return {
    getLinks: getLinks,
    addLinks: addLinks
  }

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
