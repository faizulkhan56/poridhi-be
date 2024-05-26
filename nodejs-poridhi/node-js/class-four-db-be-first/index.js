const express = require('express');
const path = require('path');
const db = require('./db'); // Adjust this path as necessary
const app = express();
const port = 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const studentRouter = require('./student/index'); // Adjust the path as necessary
app.use('/', studentRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});