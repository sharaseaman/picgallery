console.log('script sourced');

var app = angular.module('app', []);

app.controller('GalleryController', function ($http) {
  var vm = this;
  // get all sentimentals from server
  vm.getStars = function () {
    $http({
      method: 'GET',
      url: '/stars'
    }).then(function (response) {
      console.log('get stars', response);
      // store array from response 
      vm.cast = response.data;
    }); //end $http
  };
  app.controller('GalleryController', function ($http) {
    var vm = this;
    vm.showStars = function () {
      $http({
        method: 'POST',
        url: '/stars'
      }).then(function (response) {
        console.log('get stars', response);
        vm.cast = response.data;
      }); //end $http
    };
  });
});

