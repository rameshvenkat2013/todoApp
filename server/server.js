var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongooseDb');
var {newUser} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/addUser', (req, res) => {
    var user = new newUser({
        name : req.body.name,
        email : req.body.email
    });
   
    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/addUser', (req, res) => {
    newUser.find().then((doc) => {
        res.send({doc});
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(100, () => {
    console.log('Express started on port 100');
});