
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id : 2
};

var token = jwt.sign(data, '123abcdef');
console.log(token);

var decoded = jwt.verify(token,'123abcdef');
console.log('decoded', decoded);