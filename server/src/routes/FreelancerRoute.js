const express = require("express");
const router = express.Router();
const FreelancerController = require("../controllers/FreelancerController");

router.get("/freelancers", FreelancerController.getAllFreelancers);

router.post("/freelancers", FreelancerController.createFreelancer);

router.put("/freelancers/:id", FreelancerController.updateFreelancer);

router.delete("/freelancers/:id", FreelancerController.deleteFreelancerById);

router.get("/freelancers/:id", FreelancerController.getFreelancerById);

module.exports = router;
