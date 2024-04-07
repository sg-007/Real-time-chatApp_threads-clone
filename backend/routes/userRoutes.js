import express from 'express';
import { signUpUser } from '../controllers/userController.js';
const router = express.Router();

router.post("/signup", signUpUser);

export default router; 