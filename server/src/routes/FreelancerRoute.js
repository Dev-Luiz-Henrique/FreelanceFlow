import express from "express";
import FreelancerController from "../controllers/FreelancerController.js";

const router = express.Router();

router.get("/freelancers/:id", FreelancerController.getFreelancerById);

router.get("/freelancers", FreelancerController.getAllFreelancers);

router.post("/freelancers", FreelancerController.createFreelancer);

router.put("/freelancers/:id", FreelancerController.updateFreelancerById);

router.delete("/freelancers/:id", FreelancerController.deleteFreelancerById);

export default router;