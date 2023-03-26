// import express
const express = require('express');

// import body-parser
const bodyParser = require('body-parser');

// import database
const sequelize = require('./util/database');

// for cross request
const cors = require('cors');

// Creating express application,   express as function
const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

// importing expenses-router object
const expenseRoutes = require('./routes/expenseroute');

// send through a form
app.use(bodyParser.json({ extended: false }));

// call obj file
app.use('/expenses', expenseRoutes);

sequelize
    .sync()
    .then(result => {
        app.listen(4000);
    })
    .catch(err => {
        console.log(err);
    });
