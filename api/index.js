import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from  './routes/auth.route.js';
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then( () => {
        console.log('Connected to MongoDB!')
    }).catch( (err) => {
        console.log(err)
    });


const app = express();

//this is to allow JSON data to be sent to the server.
app.use(express.json());


app.listen(3000, () => {
    console.log('Server app is running on port 3000!')
});

//we're goint to install the package mongoose to easily interact to our database, create models.


//We're going to create our first model for our database, which is for our user.
//Because we need to create a model that which sets some conditions and rules about the data that can be added to our database.

// creating APIs routes

app.get('/', (req, res) => {
    res.json({
        message:"Welcome to the server",
    });
});

// request is data we get from the client side. It's from the client side (browser).
// response is data we send back to the client side from the server side. It's from the server side (server).

// why create the proxy?

// All the routes should be defined inside of index.js file.

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

//Now we don't have any form, so what we need to do is use an api test software like insomnia, postman and so on. 
//insomnia is a api test software that is used to test the server.
// By default we're not allowed to send any json to the server. 





