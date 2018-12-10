const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');

    /**
     * deleteMany
      
     db.collection('Todos').deleteMany({text: 'Something'}).then((count) => {
        console.log('User(s) Count : ' , count);
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });

    */


    /**
     * deleteOne
     * 
     

    db.collection('Todos').deleteOne({text: 'deleteones'}).then((count) => {
        console.log('User(s) Count : ' , count);
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });

    */
    
    /**
     * findOneAndDelete
     * 
     */


    db.collection('Todos').findOneAndDelete({_id: ObjectID("5c0e540142370e4623590ac4") }).then((count) => {
        console.log('User(s) Count : ' , count);
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });


    db.close();
});