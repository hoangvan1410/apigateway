const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const request = require("request");

// router
const userRoute = require("./router/user.router.js");
//const healthInfoRouter = require("./router/healthInfo.router.js");
//const rateRoute = require("./src/features/Rate/routes/rate.route.js");

//const healthInfoRouterTest = require("./src/features/HealthInfoTest/ports/http/routes.js")
dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

// connect db
mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    () => console.log(`connect database success`)
);

// router
//app.use("/api/users", userRoute);
app.use("/api/user", userRoute);
//app.use("/api/rates", rateRoute);

// app.get("/api/healthinfotest",async (req, res) => {
//     //const userId = req.session.userId
//     const uri = 'http://0.0.0.0:7007/healthInfos'
//     const healthInfo = await request(uri)
//     res.json(healthInfo)
// })
// app listen
app.set("port", process.env.PORT || 7700);
app.listen(app.get("port"), () => {
    console.log(`server is running at port ${app.get("port")}`);
});
