var express = require( 'express' );
var router = express.Router();

var stars = [];

//put star objects here with push
stars.push( { image: 'url', name: 'Jacey', touches: 0});

router.get( '/', function(req,res){
    res.send(stars);
});

module.exports = router;
