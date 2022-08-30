
const mongoose = require("mongoose");
const AsyncHandler = require("express-async-handler");
const CartDataModel = require("../models/cartDataSchema.js");

const getCartDataController = AsyncHandler(async (req, res) => {
    const cartItems = await CartDataModel.find({}).sort("-updatedAt")
    res.status(200);
    res.json(cartItems);


})



const postCartDataController = AsyncHandler(async (req, res) => {
    const { productId, qty } = req.body;
    const exist = await CartDataModel.findOne({ productId });
    if (exist) {
        //no action needed 
    }
    else {
        const cartData = new CartDataModel({
            productId,
            qty,
        })

        try {
            if (cartData) {
                cartData.save().then(() => {
                    // console.log("saved data");
                    res.status(201);
                    res.send(JSON.stringify(cartData));
                });

            }
        } catch (error) {
            console.log(error);

        }
    }



})
const updateAddCartDataController = AsyncHandler(async (req, res) => {
    const { productId } = req.params;
    const exist = await CartDataModel.findOne({ productId })  //get full data
    if (exist) {
        // console.log("yes");
        // res.send(exist);
        //exist._id then the update information
        const updateData = { ...exist, qty: exist.qty + 1 };
        const update = await CartDataModel.findByIdAndUpdate(exist._id, { $set: { qty: exist.qty + 1 } }, { new: true }, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200);
                // console.log("Updated User : ", docs);
            }
        }).clone().catch(function (err) { console.log(err) })  //need clone() to same query many times---mongoDb 
        return update;
    }

});

const updateDecCartDataController = AsyncHandler(async (req, res) => {
    const { productId } = req.params;
    const exist = await CartDataModel.findOne({ productId })  //get full data

    if (exist) {
        // console.log("yes");
        // res.send(exist);
        //exist._id then the update information
        const updateData = { ...exist, qty: exist.qty - 1 };
        const update = await CartDataModel.findByIdAndUpdate(exist._id, { $set: { qty: exist.qty - 1 } }, { new: true }, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200);
                // console.log("Updated User : ", docs);
            }
        }).clone().catch(function (err) { console.log(err) })  //need clone() to same query many times---mongoDb 

    }

});
const deleteCartDataController = AsyncHandler(async (req, res) => {
    const { productId } = req.params;
    const exist = await CartDataModel.findOne({ productId }); //details of this productId

    // console.log(exist);
    // console.log(exist._id);
    if (exist) {
        await CartDataModel.findByIdAndDelete(exist._id); //when data exist we can delete
    }

});


module.exports = { getCartDataController, postCartDataController, updateAddCartDataController, updateDecCartDataController, deleteCartDataController };