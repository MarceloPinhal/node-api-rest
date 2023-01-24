const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'e-mail required'],
            unique: true,
        },
        
        password: {
            type: String,
            required: [true, "password required"],
        },

        name: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('users', userSchema);

module.exports = User;