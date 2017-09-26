console.log('script sourced');

var app = angular.module('app', []);
 
app.controller( 'GalleryController', function( $http ){
  var vm = this;
  // get all sentimentals from server
  vm.getStars = function(){
      $http({
          method: 'GET',
          url: '/stars'
      }).then( function( response ){
        console.log('get stars', response);
          // store array from response 
          vm.cast = response.data;
      }); //end $http
  };
});




// app.controller('GalleryController', function(){
//   var vm = this;
//   vm.cast = [];
//   var star = {
//     name: "Jacey",
//     role: "The niece",
//     image: 'img/jacey_pose.jpg',
//     touch: 0,    
//     view: true
//   };
//   vm.cast.push ( star );

//   var star = {
//     name: "Brady",
//     role: 'The Nephew',
//     image: 'img/brady_hat.jpg',
//     touch: 0,    
//     view: true
// };
//   vm.cast.push( star );
//   var star = {
//     name: "Sarah",
//     role: "The Other Half",
//     image: 'img/sarah_shara_winter.jpg',
//     touch: 0,   
//     view: true
//   };
//   vm.cast.push ( star );
//   var star = {
//     name: "The Mom",
//     role: 'Love this lady',
//     image: 'img/shara_mom_beah.jpg',
//     touch: 0,    
//     view: true
// };
//   vm.cast.push( star );
//   var star = {
//     name: "Kurt",
//     role: 'Sweet boy',
//     image: 'img/kurt_soccer.jpg',
//     touch: 0,
//     view: true
// };
//   vm.cast.push( star );
//   var star = {
//     name: "Family",
//     role: 'Three of us',
//     image: 'img/falcon_andmater.jpg',
//     touch: 0,
    
//     view: true
// };
//   vm.cast.push( star );

//   vm.togglePic = function( e ){
//     vm.cast[ e ].view = !vm.cast[ e ].view;
//   };
// });