import express from "express";
import { register, login, updateProfile, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register",singleUpload,register);
router.post("/login",login);
router.get("/logout",logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;