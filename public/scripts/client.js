console.log('script sourced');

var app = angular.module('app', []);
var show = true;


app.controller('GalleryController', function(){
  var vm = this;
  vm.cast = [];
  var star = {
    name: "Jacey",
    role: "The niece",
    imageUrl: 'img/jacey_pose.jpg',
    view: true
  };
  vm.cast.push ( star );


  vm.togglePic = function( e ){
    vm.cast[ e ].view = !vm.cast[ e ].view;
  };
});