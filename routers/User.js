import express from "express";
import {
  register,
  verify,
  login,
  logout,
  addTask,
  removeTask,
  updateTask,
  getMyProfile,
  updateProfile,
  updatePassword,
  forgotPassword,
  resetPassword,
} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// public routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// private routes
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/verify").post(isAuthenticated, verify);
router.route("/newtask").post(isAuthenticated, addTask);
router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/forgotpassword").post(forgotPassword);
router.route("/resetpassword").put(resetPassword);

export default router;
