const express = require("express");
const router = express.Router();
const { getCartDataController, postCartDataController, updateCartDataController, deleteCartDataController } = require("../controller/cartController.js");

router.get("/cartdata", getCartDataController);
router.post("/cartdata", postCartDataController);
router.put("/cartdata", updateCartDataController);
router.delete("/cartdata", deleteCartDataController);


module.exports = router;