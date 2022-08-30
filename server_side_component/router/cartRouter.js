const express = require("express");
const router = express.Router();
const { getCartDataController,
    postCartDataController,
    updateAddCartDataController, updateDecCartDataController,
    deleteCartDataController } = require("../controller/cartController.js");

router.get("/cart", getCartDataController);
router.post("/cart", postCartDataController);
router.put("/cart/add/:productId", updateAddCartDataController);
router.put("/cart/dec/:productId", updateDecCartDataController);
router.delete("/cart/:productId", deleteCartDataController);


module.exports = router;