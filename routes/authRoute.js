import express from "express";
import {registerController,loginController,} from "../controllers/authController.js";


//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/", registerController);

//LOGIN || POST
router.post("/login", loginController);


export default router;