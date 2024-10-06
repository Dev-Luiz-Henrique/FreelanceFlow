import express from "express";
import OwnerController from "../controllers/OwnerController.js";

const router = express.Router();

router.get("/owners/:id", OwnerController.getOwnerById);

router.get("/owners", OwnerController.getAllOwners);

router.post("/owners", OwnerController.createOwner);

router.put("/owners/:id", OwnerController.updateOwnerById);

router.delete("/owners/:id", OwnerController.deleteOwnerById);

export default router;