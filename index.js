const dotenv = require("dotenv")
dotenv.config();

const path = require("path");


const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const cartRouter = require("./server_side_component/router/cartRouter");



const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: `https://ecommece-websites.herokuapp.com/:${PORT}`,//"http://localhost:3000"
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.static(path.join(__dirname + "/public")));


mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    // console.log(
    //     "Connected"
    // );
}).catch((err) => console.log(err));




app.use("/", cartRouter);

app.get("/", (req, res) => { res.send("holaasdfasdf") });

app.listen(PORT, () => console.log(`@http://localhost:${PORT}`));