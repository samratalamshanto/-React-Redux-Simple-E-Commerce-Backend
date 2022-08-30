const express = require("express");
const router = express.Router();
const { getCartDataController,
    postCartDataController,
    updateAddCartDataController, updateDecCartDataController,
    deleteCartDataController } = require("../controller/cartController.js");

router.get("/cartdata", getCartDataController);
router.post("/cartdata", postCartDataController);
router.put("/cartdata/add/:productId", updateAddCartDataController);
router.put("/cartdata/dec/:productId", updateDecCartDataController);
router.delete("/cartdata/:productId", deleteCartDataController);


module.exports = router;