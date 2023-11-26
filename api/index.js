import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then( () => {
        console.log('Connected to MongoDB!')
    }).catch( (err) => {
        console.log(err)
    });


const app = express();

app.listen(3000, () => {
    console.log('Server app is running on port 3000!')
});

//we're goint to install the package mongoose to easily interact to our database, create models.



















