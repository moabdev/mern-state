import mongoose from "mongoose";

// Using mongoose we're going to create a schema/the rules for our user.
//This is going to protext the data that we want to add to our database.
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    }
}, {timestamps: true});

//timestamps tells mongoose that we want to keep track of when the data was added to our database..
// We can use this two extra informmation to be able to easily sort them by time and latest.

// So after we have created our schema we can create a model for our database.
//The name of the model should be singular. The database will put it in the plural form.

const User = mongoose.model('User', userSchema);

export default User;

