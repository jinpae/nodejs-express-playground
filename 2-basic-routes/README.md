# Routes
In ths section we'll get our hands dirty by implementing some basic routes used in Express.

## Installation
1. Install [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) if you don't have them already.

2. Clone the repository:
    ```
    git clone git@github.com:jinpae/nodejs-express-playground.git
    ```
    
3. Change directory:
    ```
    cd nodejs-express-playground/2-basic-routes
    ```

4. Install dependencies using `NPM` or `Yarn`
    ```
    npm install or yarn install
    ```

5. Start the server:
    ```
    npm start
    ```

## Getting the basic routes down
Open the `app.js` file and you'll see it currently has only one route that handles the root url/route:

```
// GET /
app.get('/', function(req, res) {
  res.render('index');
});
```

Let's add a few more one by one serving a static html and EJS template engine (you could use your choice of template engine if you'd like).

1. Modify `GET /` route so that it takes a name query param. If `name` query param exists, use that instead of `World!` (e.g. http://localhost:3000/?name=jin should render `Hello Jin!`).

2. Add `GET /about` route that displays a static html page about yourself. This should send `about.html` file in `views` directory.

3. Add `GET /todos` route that renders `index.ejs` in `views/todos` directory with a hardcoded list of todos (don't worry about the contents themselves as long as the template page gets the todos array from the route handler and prints them out dynamically in the view file).

    Todo object schema:

    ```
    {
      id: 1,
      title: Learn Node.js & Express
      done: false
    }
    ```

4. Add `GET /todos/all`, `GET /todos/active`, `GET /todos/completed` routes showing all todo items, non-completed items, and completed (`done == true`) items respectively.
