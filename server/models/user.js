
var {mongoose} = require('../db/mongooseDb');

var newUser = mongoose.model('abc', {
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    location: {
        type : String
    },
    email: {
        type : String,
        require: true,
        trim: true,
        minlength: 1        
    }     
});

module.exports = { newUser };