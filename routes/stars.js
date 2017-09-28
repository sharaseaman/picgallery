var express = require( 'express' );
var router = express.Router();

var cast = [];

//put star objects here with push
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});
cast.push( {url: '/img/jacey_pose.jpg' ,name: 'Jacey', role: 'The Niece'});


router.get( '/', function(req,res){
    res.send(cast);
});

router.put( '/', function( req, res) {
    stars[req.body.index ].touches++;
    res.send( 200 );
});

module.exports = router;
