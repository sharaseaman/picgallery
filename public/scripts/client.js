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
    likes: 0,    
    view: true
  };
  vm.cast.push ( star );

  var star = {
    name: "Brady",
    role: 'The Nephew',
    imageUrl: 'img/brady_hat.jpg',
    likes: 0,    
    view: true
};
  vm.cast.push( star );
  var star = {
    name: "Sarah",
    role: "The Other Half",
    imageUrl: 'img/sarah_shara_winter.jpg',
    likes: 0,   
    view: true
  };
  vm.cast.push ( star );
  var star = {
    name: "The Mom",
    role: 'Love this lady',
    imageUrl: 'img/shara_mom_beah.jpg',
    likes: 0,    
    view: true
};
  vm.cast.push( star );
  var star = {
    name: "Kurt",
    role: 'Sweet boy',
    imageUrl: 'img/kurt_soccer.jpg',
    likes: 0,
    view: true
};
  vm.cast.push( star );
  var star = {
    name: "Family",
    role: 'Three of us',
    imageUrl: 'img/falcon_andmater.jpg',
    likes: 0,
    
    view: true
};
  vm.cast.push( star );

  vm.togglePic = function( e ){
    vm.cast[ e ].view = !vm.cast[ e ].view;
  };
});