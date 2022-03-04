const {Schema, model} = require('mongoose')

const User = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "No username entered",
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:  ["`/.+\@.+\..+/`", "Email is valid",],
        },
        thoughts:[
            {
                
            }
        ]
    })