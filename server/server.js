
var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongooseDb');
var {newUser} = require('./models/user');


var app = express();

var port = process.env.PORT || 100;

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



app.get('/removeUser/:id', (req, res) => {
    id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send('id not found');
    }

    newUser.findByIdAndRemove(id).then((doc) => {
        if(!doc){
            return res.status(404).send('data not found from server');
        }else{
            res.send({doc});
        }
    }, (err) => {
        res.status(400).send(err);
    });

});


app.patch('/updateUser/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['name', 'email']);


    if(!ObjectID.isValid(id)){
        res.status(404).send('id not found');
    }

    newUser.findByIdAndUpdate(id, {$set : body}, {new : true} ).then((doc) => {
        if(!doc){
            return res.status(404).send('data not found from server');
        }else{
            res.send({doc});
        }
    }, (err) => {
        res.status(400).send(err);
    });

});



app.get('/addUser/:id', (req, res) => {
    id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send('id not found');
    }   

    newUser.findById(id).then((doc) => {
        if(!doc){
            return res.status(404).send('data not found from server');
        }else{
            res.send({doc});
        }
    }, (err) => {
        res.status(400).send(err);
    });

});


app.listen(port, () => {
    console.log('Express started on port ', port);
});