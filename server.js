var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

//route vars
var indexRouter = require('./routes/index');
var stars = require( './routes/stars');

app.use(bodyParser.json());
app.use(express.static('public')); 


//routes
app.use('/', indexRouter);
app.use( '/stars', stars)

//spin server
app.listen(port,function(){
    console.log('listening on 5000');
});


