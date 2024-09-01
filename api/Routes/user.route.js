import express from 'express';
import { test } from '../controllers/user.controller.js';


const router = express.Router(); 

// Define the /test route using the router
router.get('/test', test);

// Export the router to be used in other parts of the application
export default router;
