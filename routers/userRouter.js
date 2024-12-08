import express from "express";
import userSignIn from "../controllers/userController.js";


const router = express.Router();
router.post("/login", userSignIn);

export default router;
