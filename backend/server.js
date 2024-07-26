const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const catRoutes = require("./routes/cat.routes");
const connectToMongoDB = require("./db/connectToMongoDB");
const consumptionRoutes = require("./routes/consumption.routes");
// app.use(express.urlencoded({ extended: true }));
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "xcolne",
  api_key: 782635272672954,
  api_secret: "c7sQrFdvL3jPUJ5NlPCCJDt2KRY",
});
// console.log();
// console.log(process.env.CLOUDINARY_API_SECRET);
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/cat", catRoutes);
app.use("/consumption", consumptionRoutes);
const port =  4000;
console.log(port);
app.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port ${port}`);
});
