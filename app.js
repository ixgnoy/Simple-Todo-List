//app.js
import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
//Set up static files (CSS, images)
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

let todos=[];

//Define routes
app.get('/', (req, res) => {
    //EJS rendering code go here
    res.render('index', { todos });
});

//Define API route for adding a new todo
app.post('/addTodo', bodyParser.urlencoded({ extended: true}), (req, res) => {
    const todoText = req.body.newTodo;
    //Adding backend logic to handle the new todo
    if (todoText) {
        todos.push(todoText);
    }
    res.redirect('/');
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});
