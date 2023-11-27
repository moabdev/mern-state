import express from "express";
import { test } from "../controllers/user.controller";

// we're going to use express to create our routes.

const router = express.Router();

// we're using the get method to get the data. If we want to send data to the server we need to use the post or the put methods.

router.get('/test', test );




export default router;
































