
const mongoose = require('mongoose');
const validator = require('validator');

var loginUser = mongoose.model('user', {    
    email: {
        type : String,
        require: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            'message' : '{VALUE} is not a valid Email!'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    tokens: [{
        access:{
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});

module.exports = { loginUser };