const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const app = express();
const postRouter = require("./routes/posts");
require("dotenv/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", authRouter);
app.use("/api/posts", postRouter);

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 0,
    socketTimeoutMS: 0,
    family: 4,
  },
  () => console.log("CONNECTED TO SERVER!")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is Running in PORT: ${PORT}`));
