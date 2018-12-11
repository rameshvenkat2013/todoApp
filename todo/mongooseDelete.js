var {ObjectID} = require('mongodb');

var {mongoose} = require('../server/db/mongooseDb');
var {newUser} = require('../server/models/user');

/*
var app = express();
var port = process.env.port || 100;
app.use(bodyParser.json());
*/


/*
newUser.remove({}).then((res) => {
    console.log(res);
});

newUser.findOneAndRemove({}).then((res) => {
    console.log(res);
});

*/

newUser.findByIdAndRemove('5c0f7ababeeef7a0189ce95b').then((res) => {
    console.log(res);
});


/*

app.get('/addUser', (req, res) => {
    newUser.find().then((doc) => {
        res.send({doc});
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(port, () => {
    console.log('Express started on port ', port);
});
*/