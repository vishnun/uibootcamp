var express = require("express");
var path = require('path');
var app = express();

app.listen(3000, function () {
  console.log('Server started at 3000');
});


// app.get('/', function(request, response){
//   response.send("Hello World");
// });


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

app.get('/', function(request, response){
  response.render('index');
});


app.use(express.static('public'));
