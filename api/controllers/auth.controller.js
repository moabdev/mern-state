import User from "../models/user.model.js";
import  bcryptjs from 'bcryptjs';
//If we don't add the ".js" to the end of the file name it is gonna make errors.

// The controllers call the logic functions of our application.
//We wanna get the information  from the browser. And this is from the body of the request.
//body.request is the information we get from the browser.



//The reason why we save this  is because we need to hash the password before saving it to the database.
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword    
    });
    try {
        await newUser.save();
        res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        next(error)
    }
    // THis save function takes time depending of our internet connection,  so in order to prevent this error we use "await", so this code stay in this line until this operation finish.
    //when we use await we have to change the funtion to an async function.
}
//hashSync means it already awaits so there's no neet to use await. We have to pass the password and something that is called salt number which is the number of times we want to hash the password.
//Salt is the hash number or variale, which is going to be combined with the password and make it encrypted.

//we use the model to save the data to the database.


// The best practice to save the passoword to the database is to hash/encrypt it before saving it to the database.



//THe best practice is to create a function and a middleware that will handle the errors.