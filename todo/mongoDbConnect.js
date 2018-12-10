const MongoClient = require('mongodb').MongoClient;
/*const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Users').insertOne({
        name:'Ramesh',
        age: 32,
        location : 'Bengaluru'
    }, (err,res) => {
        if(err){
            return console.log('unable to inserted Users', err);
        }

        console.log(res.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(res.ops, undefined, 2));        
    });


    /*
    db.collection('Todos').insertOne({
        text:'Something',
        completed: false
    }, (err,res) => {
        if(err){
            return console.log('unable to inserted todo', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    */

    db.close();
});