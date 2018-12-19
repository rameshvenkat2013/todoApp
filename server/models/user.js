
const mongoose = require('mongoose');
const validator = require('validator');

var newUser = mongoose.model('abc', {
    name : {
        type : String,
        //required : true
    },
    age : {
        type : Number
    },
    location: {
        type : String
    }
});

module.exports = { newUser };