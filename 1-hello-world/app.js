var express = require('express');

// create an express instance
var app = express();

app.set('view engine', 'ejs');

// one way to handle routes and requests
app.get('/', function(req, res) {
  res.render('index');
});

// start the server
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + server.address().port);
});
