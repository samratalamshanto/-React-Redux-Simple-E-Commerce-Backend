
const CartDataSchema = require("../models/cartDataSchema.js");
const AsyncHandler = require("express-async-handler");

const getCartDataController = AsyncHandler(async (req, res) => {
    const cartItems = await CartDataSchema.find({}).sort("-updatedAt")
    res.status(200);
    res.json(cartItems);


})



const postCartDataController = AsyncHandler(async (req, res) => {
    const { productId, qty } = req.body;

    const cartData = new CartDataSchema({
        productId,
        qty,
    })

    try {
        if (cartData) {
            cartData.save().then(() => {
                console.log("saved data");
                res.status(201);
                res.send(JSON.stringify(cartData));
            });

        }
    } catch (error) {
        console.log(error);

    }


})
const updateCartDataController = AsyncHandler(async (req, res) => { });
const deleteCartDataController = AsyncHandler(async (req, res) => { });


module.exports = { getCartDataController, postCartDataController, updateCartDataController, deleteCartDataController };