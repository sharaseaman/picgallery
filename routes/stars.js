var express = require( 'express' );
var router = express.Router();

var cast = [];

//put star objects here with push
cast.push( {url: 'http://10.100.100.253:5000/img/jacey_pose.jpg' ,name: 'Jacey'});

router.get( '/', function(req,res){
    res.send(cast);
});

// router.put( '/', function( req, res) {
//     stars[req.body.index ].touches++;
//     res.send( 200 );
// });

module.exports = router;
