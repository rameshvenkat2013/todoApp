
const {SHA256} = require('crypto-js');

var msg = 'I am user number 2';
var hash = SHA256(msg).toString();


var data = {
    id : 2
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'newsecretcode').toString()
};

var resultHash = SHA256(JSON.stringify(token.data) + 'newsecretcode').toString();

if(resultHash === token.hash){
    console.log("Data wasn't modified");
} else {
    console.log("Data was MODIFIED");
}