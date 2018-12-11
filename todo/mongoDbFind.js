const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');

    
    db.collection('Users').find({_id: new ObjectID('5c0e42309688ac2528bcb19c') }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });
    
/*
    db.collection('Users').find({_id: new ObjectID('5c0e42309688ac2528bcb19c') }).count().then((count) => {
        console.log('User(s) Count : ' , count);
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });
*/
    db.close();
});