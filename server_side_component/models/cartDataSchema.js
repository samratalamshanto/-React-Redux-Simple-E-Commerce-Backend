const mongoose = require("mongoose");
const cartDataSchema = new mongoose.Schema(
    {
        productId: {
            type: Number,
            // unique: true,

        },
        qty: {
            type: Number,
            default: 1,
        }

    },
    {
        timestamps: true,

    }
);

const CartDataModel = mongoose.model("CartData", cartDataSchema);
module.exports = CartDataModel;