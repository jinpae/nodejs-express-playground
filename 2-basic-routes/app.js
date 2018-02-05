var express = require('express');

// create an express instance
var app = express();

app.set('view engine', 'ejs');

// 1. Modify `GET /` route below so that it takes a name query param.
//    If `name` query param exists, use that instead of `World!`.
//    (e.g. http://localhost:3000/?name=jin should render `Hello Jin!`)
app.get('/', function(req, res) {
  res.render('index');
});

// 2. Add `GET /about` route that displays a static html page about yourself.
//    This should send `about.html` file in `views` directory.


// 3. Add `GET /todos` route that renders index.ejs in `views/todos` directory
//    with a hardcoded list of todos (the content doesn't really matter as long as
//    the template page gets the todos array from the route handler and prints them
//    out dynamically in the view file).
//
//    Todo object schema:
//    ```
//    {
//      id: 1,
//      title: Learn Node.js & Express
//      done: false
//    }
//    ```


// 4. Add `GET /todos/all`, `GET /todos/active`, `GET /todos/completed` routes showing
//    all todo items, non-completed items, and completed (done == true) items respectively.

// start the server
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + server.address().port);
});
