var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var port = 5000;

//route vars
var indexRouter = require('./routes/index');


app.use(bodyParser.json());
app.use(express.static('public')); 


//routes
app.use('/', indexRouter);

//spin server
app.listen(port,function(){
    console.log('listening on 5000');
});


