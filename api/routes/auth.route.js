import express from 'express';
import { signup } from '../controllers/auth.controller.js';//Don't forget to add ".js" to the end of the file name to avoid conflicts.   


const router = express.Router();

//here instead of having a get request, we're going to have a post request

router.post('/signup', signup)


export default router;

































