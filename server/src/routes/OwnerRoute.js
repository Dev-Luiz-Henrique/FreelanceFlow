const express = require("express");
const router = express.Router();
const OwnerController = require("../controllers/OwnerController");

router.get("/owners", OwnerController.getAllOwners);

router.post("/owners", OwnerController.createOwner);

router.put("/owners/:id", OwnerController.updateOwnerById);

router.delete("/owners/:id", OwnerController.deleteOwnerById);

router.get("/owners/:id", OwnerController.getOwnerById);

module.exports = router;
