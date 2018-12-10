const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDB Server');

    /**
     * findOneandUpdate
     */    
     
    /*
    db.collection('Todos').findOneAndUpdate({_id: ObjectID("5c0e53bb42370e4623590ab9") }, {
        $set : {
            text: 'Welcome to MongoDb'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    */
     
    
    db.collection('Users').findOneAndUpdate({_id: ObjectID("5c0e42309688ac2528bcb19c") }, {
        $set : {
            name: 'Prem Kumar'
        },
        $inc: {
            age : +4
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    


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
     


    db.collection('Todos').findOneAndDelete({_id: ObjectID("5c0e540142370e4623590ac4") }).then((count) => {
        console.log('User(s) Count : ' , count);
    }, (err) => {
        console.log('Unable to the read the collections', err);
    });

    */


    db.close();
});